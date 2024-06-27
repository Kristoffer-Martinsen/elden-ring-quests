'use client'
import { useState } from 'react';

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

const Questline: React.FC<QuestLineProps> = ({questLine}) => {
  const [objectives, setOjectives] = useState(questLine.objectives);
  const toggleObjective = async (id: number) => {
    const updatedObjectives = objectives.map(obj => obj.id === id ? {...obj, isDone: !obj.isDone} : obj);
    setOjectives(updatedObjectives);
    await fetch(`/api/objectives/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({isDone: !objectives.find(obj => obj.id === id)?.isDone}),
    });
  };

  return (
    <div>
      <h2>{questLine.name}</h2>
      <ul>
        {objectives.map(obj => (
          <li key={obj.id}>
            <label>
              <input type="checkbox"
              checked={obj.isDone}
              onChange={() => toggleObjective(obj.id)} />
            </label>
            {obj.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questline;