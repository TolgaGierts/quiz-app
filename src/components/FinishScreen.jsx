const FinishScreen = ({ points, maxPoints, highScore, dispatch }) => {
  const percentage = Math.round((points / maxPoints) * 100);

  let emoji;

  if (percentage >= 80) {
    emoji = '🥳';
  } else if (percentage >= 50) {
    emoji = '🙂';
  } else {
    emoji = '😢';
  }
  return (
    <>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of{' '}
        <strong>
          {maxPoints} ({percentage}%)
        </strong>
      </p>
      <p className='highscore'>(Highscore: {highScore} Points)</p>

      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Play Again
      </button>
    </>
  );
};

export default FinishScreen;
