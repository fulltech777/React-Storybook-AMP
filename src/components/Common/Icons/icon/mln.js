import React from 'react';

const SvgMln = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="mln_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mln_svg__b" cx={16} cy={15} r={15} />
      <filter id="mln_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mln_svg__e"
        d="M8.627 19.124l5.272 3.092v1.729L7 19.885V9.296L16 4l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091-1.36-.786.178-.309 1.343.776v-7.852l-6.82 4.042v11.56L16 27l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775.178.31-1.36.785zm7.175-13.31L9.18 9.699 16 13.742l6.82-4.043-6.661-3.908v1.604h-.357V5.814zm0 2.592h.357v1.657h-.357V8.406zm0 2.668h.357v1.657l-.179.081-.178-.08v-1.658zm5.56 6.45l-.178.31-1.436-.83.179-.309 1.435.83zm-2.265-1.334l-.179.31-1.435-.83.02-.194.158-.114 1.436.828zm-8.46 1.334l1.435-.829.179.31-1.435.828-.179-.309zm2.266-1.334l1.435-.828.16.114.018.195-1.435.828-.178-.309z"
      />
      <filter id="mln_svg__d" width="119.4%" height="115.2%" x="-9.7%" y="-5.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mln_svg__a)" xlinkHref="#mln_svg__b" />
      <use fill="#0B1529" xlinkHref="#mln_svg__b" />
      <use
        fill="url(#mln_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mln_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#mln_svg__d)" xlinkHref="#mln_svg__e" />
      <use fill="#FFF" xlinkHref="#mln_svg__e" />
    </g>
  </svg>
);

export default SvgMln;
