const Form = () => {
    return (
      <form className="relative flex flex-col items-center gap-4">
        <div className="max-w-[446px] w-full p-3 flex items-center bg-white rounded-2xl border transition-all shadow-username-input">
          <div className="flex items-center gap-x-2">
            {/* Icon SVG */}
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Your SVG content */}
            </svg>
            <div className="flex items-center">
              <span className="lg:text-xl text-lg">peerlist.io/</span>
              <input
                required
                placeholder="username"
                className="w-full outline-none font-normal lg:text-xl placeholder:text-gray-gray3 text-primary"
              />
            </div>
          </div>
          <button className="submit-btn" type="submit" aria-label="Submit">
            {/* Button SVG */}
          </button>
        </div>
        {/* Feedback messages */}
        <div className="feedback-messages">
          <p className="available-msg">It’s available... this username is available! 😃</p>
          <p className="claim-msg">Claim your username before it’s too late!</p>
          <p className="taken-msg">This username is already taken, you’re a little late.😐</p>
        </div>
      </form>
    );
  };
  
  export default Form;
  