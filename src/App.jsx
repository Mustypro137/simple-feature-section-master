import React from 'react';
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
            src="src/resources/photo_2.png"
            srcSet="src/resources/photo_2.png 1x,
            src/resources/photo_2@2x.png 2x"
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
            src="src/resources/photo_1.png"
            srcSet="src/resources/photo_1.png 1x,
            src/resources/photo_1@2x.png 2x"
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
            src="src/resources/photo_3.png"
            srcSet="src/resources/photo_3.png 1x,
            src/resources/photo_3@2x.png 2x"
            alt=""
          />        </div>
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
