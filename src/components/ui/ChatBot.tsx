import React, { useState, useRef, useEffect } from 'react';
import { 
  FaRobot, 
  FaTimes, 
  FaPaperPlane, 
  FaKey, 
  FaTrash, 
  FaCheck,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import { askSameerAI, getGroqApiKey, setGroqApiKey, type ChatMessage } from '../../services/groqService';

const SUGGESTED_PROMPTS = [
  "Tell me about Sameer in 3 sentences 🧠",
  "What is his top project? 🚀",
  "Is Sameer available for hiring? 💼",
  "Can I download his resume? 📄",
  "What is his tech stack? 💻"
];

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content: "Hey there! 👋 I am **Sameer AI** — powered by Groq. Ask me anything about Sameer's projects, experience at Samparkasetu, tech stack, or why he's your next great hire!"
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // API Key management state
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [hasApiKey, setHasApiKey] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const key = getGroqApiKey();
    setHasApiKey(Boolean(key));
    if (key) setApiKeyInput(key);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await askSameerAI(messages, query);
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: "⚠️ Something went wrong contacting the neural network. Please try again!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveKey = () => {
    setGroqApiKey(apiKeyInput);
    setHasApiKey(Boolean(apiKeyInput.trim()));
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setShowKeyModal(false);
    }, 1200);
  };

  const handleClearHistory = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  // Simple formatting for bold, links, code, and line breaks
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Parse markdown-like bold (**text**) and links [text](url)
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      return (
        <p key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-extrabold text-black">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
              const label = part.slice(1, part.indexOf(']('));
              const url = part.slice(part.indexOf('](') + 2, -1);
              return (
                <a 
                  key={pIdx} 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-700 underline font-bold hover:text-blue-900 inline-flex items-center gap-1"
                >
                  {label} <FaExternalLinkAlt size={10} />
                </a>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="group bg-custom-yellow text-black border-4 border-black px-5 py-3 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center gap-3"
            aria-label="Open Sameer AI Chat"
          >
            <div className="relative">
              <FaRobot className="text-2xl" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
            </div>
            <div className="text-left font-mono font-bold leading-tight hidden sm:block">
              <div className="text-xs uppercase tracking-wider text-gray-800">Ask My AI</div>
              <div className="text-sm font-shrikhand">SAMEER_BOT</div>
            </div>
          </button>
        ) : null}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] md:w-[460px] h-[600px] max-h-[88vh] bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-bounce-in">
          
          {/* Window Header */}
          <div className="bg-black text-white px-4 py-3 border-b-4 border-black flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-custom-pink border-2 border-white flex items-center justify-center text-black font-shrikhand text-base">
                S
              </div>
              <div>
                <div className="font-shrikhand text-base leading-none text-custom-yellow">SameerBot AI</div>
                <div className="font-mono text-[11px] text-green-400 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  ONLINE • GROQ POWERED
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowKeyModal(!showKeyModal)}
                title={hasApiKey ? "Groq API Key Configured" : "Enter Groq API Key"}
                className={`p-1.5 border-2 border-white rounded-lg transition-colors cursor-pointer ${
                  hasApiKey ? "bg-custom-green text-black" : "bg-custom-yellow text-black animate-bounce"
                }`}
              >
                <FaKey size={14} />
              </button>
              
              <button
                onClick={handleClearHistory}
                title="Clear Chat History"
                className="p-1.5 border-2 border-white bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors cursor-pointer"
              >
                <FaTrash size={13} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close Window"
                className="p-1.5 border-2 border-white bg-custom-red text-white hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
              >
                <FaTimes size={14} />
              </button>
            </div>
          </div>

          {/* API Key Drawer Modal */}
          {showKeyModal && (
            <div className="bg-custom-yellow border-b-4 border-black p-4 font-mono text-xs animate-fadeIn">
              <div className="flex justify-between items-center mb-2 font-bold text-sm">
                <span>🔑 Groq API Key Settings</span>
                <button onClick={() => setShowKeyModal(false)} className="cursor-pointer">
                  <FaTimes />
                </button>
              </div>
              <p className="text-gray-800 mb-2 font-medium">
                Enter your free Groq API key to power real-time AI answers:
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  placeholder="gsk_..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="flex-1 bg-white border-2 border-black px-3 py-1.5 rounded-lg outline-none font-mono"
                />
                <button
                  onClick={handleSaveKey}
                  className="bg-black text-white px-3 py-1.5 rounded-lg border-2 border-black font-bold hover:bg-gray-800 cursor-pointer flex items-center gap-1"
                >
                  {savedSuccess ? <FaCheck className="text-green-400" /> : "Save"}
                </button>
              </div>
              <div className="mt-2 flex justify-between items-center text-[10px] text-gray-700">
                <a 
                  href="https://console.groq.com/keys" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="underline hover:text-black font-bold flex items-center gap-1"
                >
                  Get free API key at console.groq.com <FaExternalLinkAlt size={8} />
                </a>
                <span>Stored securely in your browser</span>
              </div>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 font-mono text-xs sm:text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 max-w-[88%] ${
                  m.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                }`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-custom-purple text-white border-2 border-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <FaRobot size={13} />
                  </div>
                )}
                
                <div
                  className={`p-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                    m.role === 'user'
                      ? 'bg-custom-yellow text-black rounded-tr-none'
                      : 'bg-white text-gray-900 rounded-tl-none font-sans text-sm'
                  }`}
                >
                  {m.role === 'assistant' ? renderFormattedText(m.content) : m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="self-start flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-custom-purple text-white border-2 border-black flex items-center justify-center shrink-0">
                  <FaRobot size={13} />
                </div>
                <div className="bg-white border-2 border-black p-3 rounded-2xl rounded-tl-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          <div className="px-3 py-2 bg-gray-100 border-t-2 border-black flex gap-1.5 overflow-x-auto custom-scrollbar select-none">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 bg-white hover:bg-custom-yellow border border-black rounded-full font-mono text-[11px] font-bold shadow-sm transition-all shrink-0 cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t-4 border-black flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Sameer..."
              disabled={isLoading}
              className="flex-1 bg-gray-100 border-2 border-black rounded-xl px-3 py-2.5 font-mono text-xs sm:text-sm outline-none focus:bg-white focus:border-black transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-custom-green text-black border-2 border-black px-4 py-2.5 rounded-xl font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
              aria-label="Send Message"
            >
              <FaPaperPlane size={14} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

export default ChatBot;
