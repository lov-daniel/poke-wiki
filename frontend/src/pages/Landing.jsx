const Landing = () => {

    return <>
    
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.imgur.com/nhc2agR.jpeg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">Welcome to Poké Stop</h1>
      <p className="mb-5">
        Look through a complete database for all your Pokémon needs, in game and TCG!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    </>
}

export default Landing;