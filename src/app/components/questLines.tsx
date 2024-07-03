'use client'
import { useState } from 'react';
import Checkbox from './Checkbox';

type Objective = {
  id: number;
  description: string;
  isDone: boolean;
  blockers?: {
    id: number;
    description: string;
  }[];
};

type QuestLineProps = {
  questLine: {
    id: number;
    name: string;
    objectives: Objective[];
  };
};

const Questline = ({questLine}: QuestLineProps) => {
  const [objectives, setObjectives] = useState(questLine.objectives);

  const toggleObjective = (objectiveId: number) => {
    const updatedObjectives = objectives.map(objective =>
      objective.id === objectiveId
        ? { ...objective, isDone: !objective.isDone }
        : objective
    );
    setObjectives(updatedObjectives);
    const updatedQuestLines = JSON.parse(localStorage.getItem('questLines') || '[]');
    const updatedQuestLineIndex = updatedQuestLines.findIndex((ql: QuestLineProps) => ql.id === questLine.id);
    if (updatedQuestLineIndex !== -1) {
      updatedQuestLines[updatedQuestLineIndex].objectives = updatedObjectives;
      localStorage.setItem('questLines', JSON.stringify(updatedQuestLines));
    }
  }

  return (
    <div className='overflow-auto h-96 border rounded border-blue-200'>
      <h2 className='mx-4'>{questLine.name}</h2>
      <ul className='flex flex-col'>
        {objectives.map(obj => (
          <li className='my-4 px-4' key={obj.id}>
              <Checkbox checked={obj.isDone} onChange={() => toggleObjective(obj.id)} label={obj.description}
              />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questline;