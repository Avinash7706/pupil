import React from 'react';

export default function UpperPart() {
  const styles = {
    container: {
      width: '100%',
    },
    headingText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    labelHero: {
      border: '1px solid rgb(243, 243, 241)',
      borderRadius: '30px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      opacity: 1,
      padding: '8px 16px',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    icon: {
      width: '18px',
      height: '18px',
    },
    labelText: {
      color: 'rgb(55, 49, 47)',
      margin: 0,
      fontSize: '16px',
    },
    heading: {
      fontFamily: '"Editor\'s Note Semibold", "Editor\'s Note Semibold Placeholder", sans-serif',
      fontSize: '64px',
      letterSpacing: '-1px',
      lineHeight: '1.15em',
      textAlign: 'center',
      margin: 0,
    },
    description: {
      textAlign: 'center',
      color: 'rgb(17, 17, 17)',
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '18px',
      lineHeight: '1.5',
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '32px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px',
      borderRadius: '32px',
      background: 'linear-gradient(180deg, rgb(255, 255, 255) 52%, rgb(248, 249, 250) 100%)',
      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.05)',
      border: '1px solid rgb(243, 243, 241)',
    },
    featureIcon: {
      width: '15px',
      height: '15px',
    },
    featureText: {
      margin: 0,
      fontSize: '16px',
      color: 'rgb(55, 49, 47)',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headingText}>
        <div style={styles.labelHero}>
          <div style={styles.right}>
            <img 
              src="framerusercontent.com/images/TgunDVjqN0wRJvpxpIaXtEofdL0.svg" 
              alt="Icon" 
              style={styles.icon}
            />
            <p style={styles.labelText}>Hire smartly</p>
          </div>
        </div>

        <h1 style={styles.heading}>
          <strong>
            <span>10x</span> <span>Faster</span> <span>Hiring.</span>
          </strong>
          <br />
          <strong>
            <span>5x</span> <span>Better</span> <span>Candidates.</span>
          </strong>
          <br />
          <strong>
            <span>Zero</span> <span>Guesswork.</span>
          </strong>
        </h1>

        <p style={styles.description}>
          Cut through resume clutter. PromptHire combines AI speed with human expertise to deliver only the most relevant, pre-vetted candidates.
        </p>

        <div style={styles.features}>
          <div style={styles.featureItem}>
            <img 
              src="framerusercontent.com/images/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" 
              alt="Feature Icon" 
              style={styles.featureIcon}
            />
            <p style={styles.featureText}>AI + Human-powered evaluation</p>
          </div>

          <div style={styles.featureItem}>
            <img 
              src="framerusercontent.com/images/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" 
              alt="Feature Icon" 
              style={styles.featureIcon}
            />
            <p style={styles.featureText}>Domain expert insights</p>
          </div>

          <div style={styles.featureItem}>
            <img 
              src="framerusercontent.com/images/y8BBNbAsFSb2eCv8Of7CxxTLGOc.svg" 
              alt="Feature Icon" 
              style={styles.featureIcon}
            />
            <p style={styles.featureText}>Only top candidates delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
