import React from 'react'
import ReactDOM from 'react-dom/client'
import Introduction from './Introduction'
import ProjectCard from './ProjectCard'
import './index.css'

import SOP_TD3 from '../public/project_cards/SOP_TD3/summary.json';
import Orbital from '../public/project_cards/Orbital/summary.json';

const summaries: any[] = [SOP_TD3, Orbital, SOP_TD3, Orbital, Orbital, Orbital, Orbital, Orbital,] 

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Introduction />
    <h1>Data Science projects</h1>
    <div style={{display: "flex", flexWrap: "wrap"}}>
    {summaries.map((summary, index) => (
          <ProjectCard key={index} summary={summary} />
        ))}
    </div>
  </React.StrictMode>
);




