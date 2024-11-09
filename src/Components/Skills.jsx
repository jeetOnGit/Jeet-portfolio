import React from 'react';
import './skill.css'

const CircleInfographic = () => {
  const segments = [
    { color: '#4CAF50', label: 'Caption 1', x: 140, y: 20 },
    { color: '#2196F3', label: 'Caption 2', x: 180, y: 80 },
    { color: '#FF9800', label: 'Caption 3', x: 140, y: 150 },
    { color: '#FFC107', label: 'Caption 4', x: 40, y: 150 },
    { color: '#F44336', label: 'Caption 5', x: 10, y: 80 },
    { color: '#8BC34A', label: 'Caption 6', x: 40, y: 20 },
  ];

  return (
    <div className="circle-infographic">
      <svg viewBox="0 0 200 200" width="200" height="200">
        {/* SVG segments representing the "slices" */}
        <path d="M100,100 L100,0 A100,100 0 0,1 190,50 Z" fill={segments[0].color}></path>
        <path d="M100,100 L190,50 A100,100 0 0,1 150,190 Z" fill={segments[1].color}></path>
        <path d="M100,100 L150,190 A100,100 0 0,1 50,190 Z" fill={segments[2].color}></path>
        <path d="M100,100 L50,190 A100,100 0 0,1 10,50 Z" fill={segments[3].color}></path>
        <path d="M100,100 L10,50 A100,100 0 0,1 100,0 Z" fill={segments[4].color}></path>
        <path d="M100,100 L100,0 A100,100 0 0,1 50,10 Z" fill={segments[5].color}></path>
      </svg>

      {/* Caption labels positioned around the circle */}
      <div className="labels">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="label"
            style={{
              top: `${segment.y}px`,
              left: `${segment.x}px`,
              color: segment.color,
            }}
          >
            <h3>{segment.label}</h3>
            <p>This slide is an editable slide with all your needs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleInfographic;
