import React from 'react'
import ReactDOM from 'react-dom/client'
import Introduction from './Introduction'
import ProjectCard from './ProjectCard'
import './index.css'

import SOP_TD3 from '../public/project_cards/SOP_TD3/summary.json';
import Orbital from '../public/project_cards/Orbital/summary.json';
import Dimensionality from '../public/project_cards/Dimensionality/summary.json';
import AdaSim from '../public/project_cards/AdaSim/summary.json';
import genetic from '../public/project_cards/genetic/summary.json';
import CycleGAN from '../public/project_cards/CycleGAN/summary.json';
import neuro from '../public/project_cards/neuro/summary.json';

import Website from '../public/project_cards/Website/summary.json';
import Kaleidoscope from '../public/project_cards/Kaleidoscope/summary.json';
import packageRanker from '../public/project_cards/packageRanker/summary.json';
import satSim from '../public/project_cards/satSim/summary.json';
import portableBrushing from '../public/project_cards/portableBrushing/summary.json';
import socialMedia from '../public/project_cards/socialMedia/summary.json';

import FlowSensor from '../public/project_cards/FlowSensor/summary.json';
import AudioEqualizer from '../public/project_cards/AudioEqualizer/summary.json';

interface ProjectSummary {
  name: string;
  summary: string;
  skills: string;
  images?: { src: string; alt: string }[];
  video?: string[];
  paper?: string;
}

const dataScienceSummaries: ProjectSummary[][] = [[SOP_TD3, AdaSim], [CycleGAN, Dimensionality], [genetic, Orbital, neuro]]; 
const softwareSummaries: ProjectSummary[][] = [[Website, packageRanker], [ Kaleidoscope, socialMedia], [satSim, portableBrushing]];
const hardwareSummaries: ProjectSummary[][] = [[FlowSensor], [AudioEqualizer]];

function ProjectBoard(props: any) {
  const summaries: ProjectSummary[][] = props.summaries;
  return (
    <div style={{display: "flex"}}>
    {summaries.map((row, index) => (
      <div style={{width: "31.7vw", margin: "0.3vw", minWidth: "300px"}}>
        {row.map((summary, index) => (
            <ProjectCard key={index} summary={summary} id={props.id}/>
        ))}
      </div>
    ))}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Introduction />

    <h1>Some of my AI / Data Science projects: </h1>
    <ProjectBoard summaries={dataScienceSummaries} id='DSBoard'/>


    <h1>Some of my Software Engineering projects: </h1>
    <ProjectBoard summaries={softwareSummaries} />

    <h1>Some of my Hardware projects: </h1>
    <ProjectBoard summaries={hardwareSummaries} />

  </React.StrictMode>
);




