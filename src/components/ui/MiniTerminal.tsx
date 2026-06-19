import React, { useState } from 'react';


type HistoryItem = {
  type: string;
  text: string;
};

const MiniTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: 'SameerOS v1.0.0 (tty1)' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);


  const [secretNumber, setSecretNumber] = useState<number | null>(null);


  const addLine = (text: string, type: string = 'output') => {
    setHistory((prev) => [...prev, { type, text }]);
  };


  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      addLine(`guest@sameer:~$ ${input}`, 'input');


      if (secretNumber !== null && cmd !== '' && !isNaN(Number(cmd))) {
        const guess = Number(cmd);
        if (guess === secretNumber) {
          addLine('Correct! You guessed the number.');
          setSecretNumber(null);
        } else if (guess < secretNumber) {
          addLine('Too low');
        } else {
          addLine('Too high');
        }
        setInput('');
        return;
      }

      switch (cmd) {
        case 'help':
          addLine('Available commands: whoami, skills, projects, clear, fetch');
          addLine('Fun commands: game, guess, rps, matrix, hack, sudo');
          break;

        case 'whoami':
          addLine('Sameer Pradeep Jadhav | B.Tech CSE Student @ Sanjivani University');
          addLine('Status: Full Stack Developer & AI Enthusiast');
          break;

        case 'skills':
          addLine('► Java, Python, Angular, React, Spring Boot, Node.js');
          addLine('► Core CS, MySQL, PostgreSQL, JWT Auth');
          break;

        case 'projects':
          addLine('1. Healthcare EHR System');
          addLine('2. AI SQL Workbench (Datalk)');
          addLine('3. QR Maintenance & Device Management System');
          addLine('4. Online Exam Portal');
          addLine('5. QuickChat');
          break;

        case 'game':
          addLine('Available games:');
          addLine('• guess  -> Number Guessing Game');
          addLine('• rps    -> Rock Paper Scissors');
          break;

        case 'guess':
          const num = Math.floor(Math.random() * 10) + 1;
          setSecretNumber(num);
          addLine('I picked a number between 1 and 10. Try to guess!');
          break;

        case 'rps': {
          addLine('Type rock, paper, or scissors');
          setSecretNumber(null);
          break;
        }

        case 'rock':
        case 'paper':
        case 'scissors': {
          const options = ['rock', 'paper', 'scissors'];
          const bot = options[Math.floor(Math.random() * 3)];
          addLine(`You chose: ${cmd}`);
          addLine(`Bot chose: ${bot}`);

          if (cmd === bot) addLine('Draw');
          else if (
            (cmd === 'rock' && bot === 'scissors') ||
            (cmd === 'paper' && bot === 'rock') ||
            (cmd === 'scissors' && bot === 'paper')
          )
            addLine('You win');
          else addLine('Bot wins');
          break;
        }

        case 'sudo':
          addLine('ACCESS GRANTED. Downloading highly classified secure files...');
          addLine('10%... 45%... 89%... 100%...');
          addLine('Just kidding. This incident will be reported.');
          break;

        case 'fetch':
          addLine('   \\__/    SameerOS v1.0');
          addLine('   (oo)    -------------');
          addLine('  /----\\   Host: Sameer_Brain_01');
          addLine(' / |  | \\  Uptime: 21 Years');
          addLine('*  |--|  * Packages: 99 (npm)');
          addLine('   ~~~~    Shell: bash');
          addLine('           Theme: Neo-Brutalist');
          break;

        case 'matrix':
          addLine('Initializing Matrix protocol...');
          for(let i=0; i<15; i++) {
             addLine(Array.from({length: 40}, () => Math.random().toString(36).charAt(2)).join(' '));
          }
          addLine('Wake up, Neo...');
          break;

        case 'hack':
          addLine('Initiating hack on mainframes...');
          addLine('Bypassing firewall... Success.');
          addLine('Extracting passwords... Success.');
          addLine('Hack complete. You are now a 1337 hax0r.');
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case '':
          break;

        default:
          addLine(`bash: ${cmd}: command not found`);
      }

      setInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border-4 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col font-mono text-sm sm:text-base">
      <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black"></div>
        </div>
        <span className="font-bold text-black text-xs tracking-widest">root@sameer:~</span>
        <div className="w-10"></div>
      </div>

      <div className="p-4 h-64 overflow-y-auto bg-black text-custom-blue custom-scrollbar">
        {history.map((line, index) => (
          <div
            key={index}
            className={`mb-1 ${line.type === 'input' ? 'text-white' : 'text-custom-blue'}`}
          >
            {line.text}
          </div>
        ))}

        <div className="flex items-center mt-2">
          <span className="text-custom-green mr-2">guest@sameer:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-custom-blue caret-custom-blue"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniTerminal;