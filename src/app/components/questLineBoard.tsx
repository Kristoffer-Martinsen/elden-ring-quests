'use client'
import { useState, useEffect } from 'react';
import Questline from './questLines';

type Objective = {
  id: number;
  description: string;
  isDone: boolean;
  blockers?: {
    id: number;
    description: string;
  }[];
};

type QuestLineType = {
  id: number;
  name: string;
  objectives: Objective[];
};

export default function QuestLineBoard() {
  const [questLines, setQuestLines] = useState<QuestLineType[]>([]);

  useEffect(() => {
    const fetchQuestLines = async () => {
      const res = await fetch('/api/quest-lines');
      const data = await res.json();
      setQuestLines(data);
    };
    fetchQuestLines();
  }, []);

  return (
    <div>
      <h1 className='mb-4'>Elden Ring Quest Tracker</h1>
      <div className='grid grid-cols-4 gap-12'>
        {questLines.map(questLine => (
          <Questline key={questLine.id} questLine={questLine} />
        ))}
      </div>
    </div>
  );
}
