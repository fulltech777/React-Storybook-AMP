import React from 'react';

const SvgBtcp = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="btcp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="btcp_svg__b" cx={16} cy={15} r={15} />
      <filter id="btcp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="btcp_svg__e"
        d="M20.215 6.2l-.7 2.842c2.164.756 3.757 1.89 3.446 3.99-.09.638-.31 1.277-.764 1.76-.389.417-.997.638-1.516.808a6.459 6.459 0 0 1-1.93.339c-.44 0-.868-.013-1.308-.052-.712-.053-1.438-.118-2.137-.274-.22-.052-.428-.091-.622-.144l-.946 3.82-.557 2.086-.7 2.856-1.722-.43.713-2.882c-.402-.104-.817-.221-1.231-.326L8 20.033l.855-1.97s1.27.34 1.256.314c.493.117.7-.209.79-.417l.972-3.912.453-1.812.519-2.086c.025-.365-.104-.834-.804-1.004.026-.013-1.256-.313-1.256-.313l.453-1.851 2.37.6c.364.09.726.169 1.102.26L15.41 5l1.722.43-.686 2.79c.453.105.92.209 1.373.326l.673-2.777 1.723.43zm-.142 10.3c.479-.079 1.062-.274 1.476-.444.013-.013.04-.013.052-.026.894.795 1.321 2.086.738 3.742-.92 2.686-3.134 2.907-6.062 2.347L15.565 25l-1.71-.43.66-2.751.026-.091.519-2.113c1.528.34 3.588.561 3.976-1.03.208-.847-.194-1.46-.842-1.903l.674-.04c.48-.025.725-.064 1.205-.143zm-.506-3.495c.506-2.047-2.63-2.49-3.6-2.75l-.856 3.467c.972.248 3.977 1.239 4.456-.717z"
      />
      <filter id="btcp_svg__d" width="123.3%" height="117.5%" x="-11.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#btcp_svg__a)" xlinkHref="#btcp_svg__b" />
      <use fill="#272D63" xlinkHref="#btcp_svg__b" />
      <use
        fill="url(#btcp_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#btcp_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#btcp_svg__d)" xlinkHref="#btcp_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#btcp_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBtcp;
