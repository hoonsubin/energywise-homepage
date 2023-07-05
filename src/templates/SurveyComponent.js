import React, { useEffect } from 'react';

const SurveyComponent = () => {
  useEffect(() => {
    const handleSurveyCompletion = (event) => {
      if (event.data === 'surveyCompleted') {
        alert('Redirecting to Energywise...');
        window.location.href = 'https://energywise.solutions/';
      }
    };

    window.addEventListener('message', handleSurveyCompletion);

    return () => {
      window.removeEventListener('message', handleSurveyCompletion);
    };
  }, []);

  return (
    <div
      id="survey-container"
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <iframe
        src="https://app.energywise.solutions"
        id="survey-iframe"
        title="Survey"
        onLoad={() => {
          const iframe = document.getElementById('survey-iframe');
          if (iframe) {
            const contentHeight =
              iframe.contentWindow.document.documentElement.scrollHeight;
            iframe.style.height = `${contentHeight}px`;
          }
        }}
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default SurveyComponent;
