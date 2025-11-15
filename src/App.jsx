import React from 'react';
import photo1_1x from '../src/resources/photo_1.png';
import photo1_2x from '../src/resources/photo_1@2x.png';

import photo2_1x from '../src/resources/photo_2.png';
import photo2_2x from '../src/resources/photo_2@2x.png';

import photo3_1x from '../src/resources/photo_3.png';
import photo3_2x from '../src/resources/photo_3@2x.png';

export default function App() {
  return (
    <main>
      <h1 className="title">Quality feedbacks for your SaaS products</h1>
      <p className="subtitle">The blocks & components you need</p>

      <div className="cards">
        <div className="card">
          <span className="icon">✋</span>
          <h3>Collect Feedback at Multiple Touchpoints</h3>
          <p>
            Provide a comprehensive understanding of the customer experience.
          </p>
          <img
            src={photo2_1x}
            srcSet={`${photo2_1x} 1x, ${photo2_2x} 2x`}
            alt=""
          />
        </div>

        <div className="card">
          <span className="icon">🥅</span>
          <h3>Ask Targeted and Specific Questions</h3>
          <p>
            Avoid vague or open-ended questions that may not yield actionable
            insights.
          </p>
          <img
            src={photo1_1x}
            srcSet={`${photo1_1x} 1x, ${photo1_2x} 2x`}
            alt=""
          />
        </div>

        <div className="card">
          <span className="icon">💬</span>
          <h3>Prioritize and Respond to Feedback</h3>
          <p>
            Communicate the changes or improvements you've made in response to
            their feedback.
          </p>
          <img
            src={photo3_1x}
            srcSet={`${photo3_1x} 1x, ${photo3_2x} 2x`}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

/* 
✋
    
     🥅
    
     💬
    
     Quality feedbacks for your SaaS products
    
     The blocks & components you need
    
     Collect Feedback at Multiple Touchpoints
    
     Provide a comprehensive understanding of the customer experience.
    
     Ask Targeted and Specific Questions
    
     Avoid vague or open-ended questions that may not yield actionable insights.
    
     Prioritize and Respond to Feedback
    
     Communicate the changes or improvements you've made in response to their feedback.
*/
