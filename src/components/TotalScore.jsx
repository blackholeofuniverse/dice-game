const TotalScore = ({score}) => {
  return (
    <div className='w-40'>
      <h1 className='text-[100px] leading-none text-center'>{score}</h1>
      <p className='text-2xl font-medium text-center'>Total Score</p>
    </div>
  );
};

export default TotalScore;