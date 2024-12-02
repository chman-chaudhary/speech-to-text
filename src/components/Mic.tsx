import styled from "styled-components";

const Mic = ({
  startRecording,
  stopRecording,
  isRecording,
  setIsRecording,
}: {
  startRecording: () => void;
  stopRecording: () => void;
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
}) => {
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else startRecording();
    setIsRecording(!isRecording);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <input
          className="input"
          hidden
          type="checkbox"
          aria-label="audio-command"
          name="audio-command"
          id="audio-command"
          onChange={toggleRecording}
          checked={isRecording}
        />
        <div className="inner-card">
          <div className="trigger-wrap">
            <label className="trigger" htmlFor="audio-command">
              {" "}
            </label>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mic"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
            >
              <path d="m19.5,10.89c0,4.44-3.36,8.04-7.5,8.04s-7.5-3.6-7.5-8.04" />
              <line x1={12} y1="22.42" x2={12} y2="18.93" />
              <rect
                x="8.38"
                y="1.81"
                width="7.23"
                height="13.25"
                rx="3.62"
                ry="3.62"
              />
            </svg>
            <div className="spectrum">
              <b style={{ "--index": 0 } as React.CSSProperties} />
              <b style={{ "--index": 1 } as React.CSSProperties} />
              <b style={{ "--index": 2 } as React.CSSProperties} />
              <b style={{ "--index": 3 } as React.CSSProperties} />
              <b style={{ "--index": 4 } as React.CSSProperties} />
              <b style={{ "--index": 5 } as React.CSSProperties} />
              <b style={{ "--index": 6 } as React.CSSProperties} />
              <b style={{ "--index": 7 } as React.CSSProperties} />
              <b style={{ "--index": 8 } as React.CSSProperties} />
              <b style={{ "--index": 9 } as React.CSSProperties} />
              <b style={{ "--index": 10 } as React.CSSProperties} />
              <b style={{ "--index": 11 } as React.CSSProperties} />
              <b style={{ "--index": 12 } as React.CSSProperties} />
              <b style={{ "--index": 13 } as React.CSSProperties} />
              <b style={{ "--index": 14 } as React.CSSProperties} />
              <b style={{ "--index": 15 } as React.CSSProperties} />
              <b style={{ "--index": 16 } as React.CSSProperties} />
              <b style={{ "--index": 17 } as React.CSSProperties} />
              <b style={{ "--index": 18 } as React.CSSProperties} />
              <b style={{ "--index": 19 } as React.CSSProperties} />
              <b style={{ "--index": 20 } as React.CSSProperties} />
              <b style={{ "--index": 21 } as React.CSSProperties} />
              <b style={{ "--index": 22 } as React.CSSProperties} />
              <b style={{ "--index": 23 } as React.CSSProperties} />
              <b style={{ "--index": 24 } as React.CSSProperties} />
              <b style={{ "--index": 25 } as React.CSSProperties} />
              <b style={{ "--index": 26 } as React.CSSProperties} />
              <b style={{ "--index": 27 } as React.CSSProperties} />
              <b style={{ "--index": 28 } as React.CSSProperties} />
              <b style={{ "--index": 29 } as React.CSSProperties} />
              <b style={{ "--index": 30 } as React.CSSProperties} />
              <b style={{ "--index": 31 } as React.CSSProperties} />
              <b style={{ "--index": 32 } as React.CSSProperties} />
              <b style={{ "--index": 33 } as React.CSSProperties} />
              <b style={{ "--index": 34 } as React.CSSProperties} />
              <b style={{ "--index": 35 } as React.CSSProperties} />
              <b style={{ "--index": 36 } as React.CSSProperties} />
              <b style={{ "--index": 37 } as React.CSSProperties} />
              <b style={{ "--index": 38 } as React.CSSProperties} />
              <b style={{ "--index": 39 } as React.CSSProperties} />
              <b style={{ "--index": 40 } as React.CSSProperties} />
              <b style={{ "--index": 41 } as React.CSSProperties} />
              <b style={{ "--index": 42 } as React.CSSProperties} />
              <b style={{ "--index": 43 } as React.CSSProperties} />
              <b style={{ "--index": 44 } as React.CSSProperties} />
            </div>
          </div>
          <div className="content text-center">
            <span>{isRecording ? "Listening..." : "Click Mic To Start"}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --w-card: 320px;
    --h-card: 380px;
    --p-card: 2.4px;
    --p-inner: 18px;
    --round-card: 28px;
    --w-inner: calc(var(--w-card) - calc(var(--p-card) * 2));
    --h-inner: calc(var(--h-card) - calc(var(--p-card) * 2));
    --round-inner: calc(var(--round-card) - var(--p-card));
    border-radius: var(--round-card);
    width: var(--w-card);
    height: var(--h-card);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(130deg, #7209d450, #fff 33%, #00a5b250);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 30px, rgba(60, 64, 67, 0.1) 0 1px 8px 0,
      rgba(60, 64, 67, 0.1) 0 1px 1px 0,
      rgba(187, 18, 199, 0.15) 1px 1px 200px 0px,
      rgba(0, 98, 178, 0.15) -1px -1px 200px 0px;
  }
  .card::before {
    content: "";
    z-index: 1;
    position: absolute;
    width: var(--w-inner);
    height: var(--h-inner);
    border-radius: var(--round-inner);
    background: #ffffff;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
  .card::after {
    content: "";
    --cl-light: #fff;
    --cr-light: #0000;
    position: absolute;
    z-index: 0;
    filter: blur(60px);
    width: calc(var(--h-card) * 1.25);
    height: calc(var(--h-card) * 1.25);
    animation: rotating 10s linear infinite;
    background: conic-gradient(
      from 45deg at 50% 50%,
      var(--cl-light),
      var(--cr-light),
      var(--cl-light),
      var(--cl-light),
      var(--cl-light),
      var(--cr-light),
      var(--cl-light),
      var(--cl-light),
      var(--cl-light)
    );
  }
  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }

  .inner-card {
    position: relative;
    z-index: 2;
    width: var(--w-inner);
    height: var(--h-inner);
    border-radius: var(--round-inner);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.35s ease;
    background: rgba(255, 255, 255, 0.1);
    outline: var(--p-card) solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
  }
  .inner-card::before,
  .inner-card::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: var(--round-inner);
    filter: blur(60px);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
  .inner-card::before {
    background: linear-gradient(135deg, #fff, #7209d425 25%, #0000);
  }
  .inner-card::after {
    background: linear-gradient(135deg, #0000, #00a6b225 66%, #fff);
  }

  .input {
    display: none;
    position: absolute;
    height: 0;
    width: 0;
    overflow: hidden;
    pointer-events: none;
    visibility: hidden;
  }

  .trigger-wrap {
    --sz-trigger-wrap: calc(var(--w-card) * 0.65);
    --sz-trigger: calc(var(--sz-trigger-wrap) * 0.65);
    z-index: 4;
    inset: 50%;
    position: absolute;
    transform: translate(-50%, -65%);
    height: var(--sz-trigger-wrap);
    width: var(--sz-trigger-wrap);
    outline: 1.4px solid #ffffff70;
    border-radius: 9999px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease;
    --shadow-wrap: rgba(255, 255, 255, 0.6) 0 0 20px 4px inset,
      rgba(50, 50, 93, 0.2) 0 10px 80px 2px inset,
      rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
    box-shadow: rgba(0, 0, 0, 0.25) 0 10px 50px, var(--shadow-wrap);
  }

  .trigger {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 6;
    border-radius: 9999px;
    width: var(--sz-trigger);
    height: var(--sz-trigger);
    overflow: hidden;
    --shadows: rgb(255, 255, 255) 0 0 1px 1px, rgb(255, 255, 255) 0 0 10px 3px,
      rgb(255, 255, 255) 0 0 11px 2px, rgb(255, 255, 255) 0 0 22px 6px,
      rgba(255, 255, 255, 0.85) 0px 20px 50px,
      rgba(187, 18, 199, 0.8) 4px 4px 30px 0px,
      rgba(0, 98, 178, 0.8) -4px -4px 30px 0px;
    box-shadow: var(
      --shadows,
      rgba(255, 255, 255, 0.75) 0 0 1px 1px,
      rgba(255, 255, 255, 0.75) 0 0 15px 2px,
      rgba(255, 255, 255, 0.75) 0px 10px 50px,
      rgba(187, 18, 199, 0.8) 2px 2px 20px 0px,
      rgba(0, 98, 178, 0.8) -2px -2px 20px 0px
    );
    transition: all 0.35s ease;
  }
  .trigger::after {
    content: "";
    position: relative;
    z-index: 1;
    width: var(--sz-trigger);
    height: var(--sz-trigger);
    transition: all 0.35s ease;
    background: linear-gradient(130deg, #bb12c7, #7209d4 33%, #00a5b2);
    filter: blur(35px);
    backdrop-filter: blur(60px);
    -webkit-backdrop-filter: blur(60px);
    border-radius: 9999px;
  }
  .mic {
    height: 60px;
    width: 60px;
    color: white;
    opacity: 0.5;
    transition: all 0.35s ease;
    position: absolute;
    z-index: 9;
    pointer-events: none;
    overflow: visible;
  }
  .mic * {
    transition: all 0.35s ease;
  }
  .spectrum {
    z-index: 2;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    overflow: hidden;
    border-radius: 999px;
    pointer-events: none;
    animation: rotating 5s steps(45) infinite;
  }
  .spectrum b {
    width: 1px;
    pointer-events: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(calc(8deg * var(-"--index")));
  }
  .spectrum b::before,
  .spectrum b::after {
    --h-spectrums: 1px;
    content: "";
    position: absolute;
    z-index: 0;
    inset-inline: 0;
    width: 1px;
    opacity: 1;
    background: white;
    border-radius: 9999px;
    transition: all 0.35s ease;
    height: calc(var(-"--index") * calc(var(--h-spectrums) / 2.5));
  }
  .spectrum b::before {
    top: 68px;
  }
  .spectrum b::after {
    bottom: 68px;
  }

  .input:checked ~ .inner-card {
    box-shadow: rgba(255, 255, 255) 0 0 10px,
      rgba(255, 255, 255, 0.95) 0 0 10px 4px;
  }
  .input:checked ~ .inner-card .trigger-wrap {
    transform: translate(-50%, -50%);
    outline: 1px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 50px, var(--shadow-wrap);
  }
  .input:checked ~ .inner-card .trigger-wrap .spectrum b::before {
    --h-spectrums: 1.5px;
    top: 68px;
    animation: spectrums 0.6s steps(3) infinite 0.6s;
  }
  .input:checked ~ .inner-card .trigger-wrap .spectrum b::after {
    --h-spectrums: 2px;
    bottom: 68px;
    animation: spectrums 0.6s steps(3) infinite 0.6s;
  }
  @keyframes spectrums {
    0%,
    100% {
      opacity: 0.5;
      height: calc(var(-"--index") * 0px);
    }
    25% {
      opacity: 0.5;
      height: calc(var(-"--index") * calc(var(--h-spectrums) / 2));
    }
    50% {
      opacity: 1;
      height: calc(var(-"--index") * var(--h-spectrums));
    }
    75% {
      opacity: 0.75;
      height: calc(var(-"--index") * calc(var(--h-spectrums) / 3));
    }
  }

  .trigger:hover ~ .mic,
  .trigger:hover ~ .mic .fill-head-mic {
    opacity: 0.85;
  }
  .trigger:active {
    transform: scale(0.95);
  }
  .trigger:active ~ .mic {
    transform: scale(1.05);
  }
  .input:checked ~ .inner-card .trigger-wrap .trigger {
    --shadows: rgb(255, 255, 255) 0 0 1px 6px, rgb(255, 255, 255) 0 0 10px 9px,
      rgb(255, 255, 255) 0 0 11px 7px, rgb(255, 255, 255) 0 0 22px 11px,
      rgba(255, 255, 255, 0.85) 0px 20px 50px,
      rgba(187, 18, 199, 0.8) 4px 4px 30px 0px,
      rgba(0, 98, 178, 0.8) -4px -4px 30px 0px;
    animation: shadows 1.2s linear infinite 1s;
  }
  @keyframes shadows {
    from,
    to {
      box-shadow: var(--shadows);
    }
    50% {
      box-shadow: rgb(255, 255, 255, 0.85) 0 0 1px 4px,
        rgb(255, 255, 255, 0.85) 0 0 10px 6px,
        rgb(255, 255, 255, 0.85) 0 0 11px 8px,
        rgb(255, 255, 255, 0.85) 0 0 22px 4px,
        rgba(255, 255, 255, 0.85) 0px 20px 50px,
        rgba(187, 18, 199, 0.8) 4px 4px 30px 0px,
        rgba(0, 98, 178, 0.8) -4px -4px 30px 0px;
    }
  }

  .input:checked ~ .inner-card .trigger-wrap .trigger::after {
    animation: gradients 2.4s linear infinite;
  }
  @keyframes gradients {
    0%,
    99.99% {
      background: radial-gradient(
        circle,
        #bb12c7cc 0%,
        #7c09d4cc 20%,
        #0062b2cc 100%
      );
    }
    33.33% {
      background: radial-gradient(circle, #0062b2cc 0%, #7c09d4cc 100%);
    }
    66.66% {
      background: radial-gradient(circle, #7c09d4cc 0%, #1260c7cc 100%);
    }
  }
  .input:checked ~ .inner-card .trigger-wrap .mic {
    opacity: 0.85;
    animation: opacity 2.4s linear infinite 1s;
  }
  @keyframes opacity {
    from,
    to {
      opacity: 0.85;
    }
    50% {
      opacity: 0.45;
    }
  }
  .input:checked ~ .inner-card .trigger-wrap .mic path {
    --dasharray: 100;
    d: path(
      "m37.75,11.84h-13.75c-.72,0-5.2-6.05-6-6.04s-5.53,15.65-6,15.65C11.56,21.45,6.84,0,5.99,0,5.02,0,1.49,11.86,0,11.85h-13.75"
    );
    stroke-width: 1.6;
    stroke-dasharray: var(--dasharray);
    animation: rate 2.4s infinite linear forwards;
  }
  @keyframes rate {
    from {
      stroke-dashoffset: calc(var(--dasharray) * -1px);
    }
    to {
      stroke-dashoffset: var(--dasharray);
    }
  }

  .input:checked ~ .inner-card .trigger-wrap .mic line {
    opacity: 0;
  }
  .input:checked ~ .inner-card .trigger-wrap .mic rect {
    --sz-rect: 54px;
    x: -15;
    y: -15;
    width: var(--sz-rect);
    height: var(--sz-rect);
    rx: var(--sz-rect);
    ry: var(--sz-rect);
    stroke: #0000;
    stroke-width: 0.8;
  }
  .input:checked ~ .inner-card .content {
    transform: translate(-0%, 100%) scale(0.8);
    transition-delay: 0s;
    pointer-events: none;
    opacity: 0;
  }

  .content {
    position: absolute;
    bottom: var(--p-inner);
    z-index: 1;
    margin-top: 44px;
    font-family: sans-serif;
    font-size: 12px;
    line-height: 1.5;
    width: calc(100% - calc(var(--p-inner) * 2));
    padding: 12px;
    background: #ffffff50;
    outline: 2px solid #ffffff70;
    border-radius: 12px;
    transition: all 0.35s ease;
    transition-delay: 0.25s;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.1) 0px 10px 50px, rgba(0, 0, 0, 0.1) 0px 0px 1px inset;
  }
  .content span {
    color: #424242;
    font-weight: 600;
  }

  @media (hover: hover) {
    .trigger:hover ~ .mic,
    .trigger:hover ~ .mic .path-mic {
      opacity: 0.85;
    }
  }
`;

export default Mic;
