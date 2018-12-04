import React from 'react';

const SvgHush = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="hush_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="hush_svg__b" cx={16} cy={15} r={15} />
      <filter id="hush_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="hush_svg__e"
        d="M15.007 17.657c0-.46.002-.919-.001-1.378-.001-.128.036-.226.155-.278.11-.048.225-.014.321.098.286.334.57.67.855 1.006.1.117.201.233.298.354a.175.175 0 0 1 .038.1c.002.485.003.97.001 1.454a.848.848 0 0 1-.771.855.842.842 0 0 1-.888-.726c-.009-.055-.008-.112-.008-.168v-1.317zm.003-9.01c-.001-.02-.003-.039-.003-.059V5.856c.001-.42.289-.774.679-.843a.831.831 0 0 1 .983.821c.01.931.004 1.863.006 2.794l-.005.048c-.194-.332-.462-.498-.828-.497-.362 0-.632.16-.832.468zm-.003 12.613c.204.31.476.468.841.467.364-.001.629-.167.827-.475v2.314c-.001.227.006.456-.014.68a.829.829 0 0 1-.87.753.838.838 0 0 1-.782-.832c-.005-.893-.002-1.786-.002-2.68v-.227zm1.668-8.826v1.661c0 .158-.05.244-.17.292a.309.309 0 0 1-.36-.094l-.724-.848c-.125-.146-.25-.291-.373-.44a.174.174 0 0 1-.04-.1c-.002-.714-.003-1.429 0-2.143a.84.84 0 0 1 .766-.842c.395-.044.787.25.879.664.015.069.02.141.02.212.002.546.002 1.092.002 1.638zm1.731-3.377v-2.22c.002-.402.231-.73.587-.842.54-.171 1.08.237 1.083.825.003.554 0 1.108 0 1.661v2.795c0 .413-.248.747-.627.85-.493.133-.996-.23-1.037-.749a1.965 1.965 0 0 1-.005-.153V9.057zM13.362 19.76v2.565a.845.845 0 0 1-.693.847c-.48.092-.959-.298-.973-.797-.004-.143-.001-.286-.001-.429v-4.753c0-.399.256-.736.628-.832a.834.834 0 0 1 1.038.812c.003.862 0 1.725 0 2.587zm0-9.446v3.499a.845.845 0 0 1-.656.84.836.836 0 0 1-1.01-.81c-.005-.506-.001-1.011-.002-1.517V6.82c0-.412.268-.756.653-.843a.835.835 0 0 1 1.014.821c.003.899 0 1.797 0 2.696v.819zm5.044 8.186v-3.8c0-.379.162-.66.5-.818.542-.251 1.15.15 1.17.763v7.648c0 .418-.239.75-.616.858-.494.142-1.006-.22-1.048-.741a2.013 2.013 0 0 1-.005-.16v-3.752zm5.094-3.866v5.94a.85.85 0 0 1-.671.852c-.492.107-.982-.286-.996-.799V8.707c0-.385.193-.692.519-.828.55-.23 1.147.184 1.147.798v5.956zm-13.333-.009v5.949c0 .42-.26.757-.652.85-.5.12-1.001-.274-1.015-.799V8.688c0-.409.245-.741.62-.845a.834.834 0 0 1 1.046.802c.005.655.001 1.311.001 1.967v4.012z"
      />
      <filter id="hush_svg__d" width="123.3%" height="117.5%" x="-11.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#hush_svg__a)" xlinkHref="#hush_svg__b" />
      <use fill="#292929" xlinkHref="#hush_svg__b" />
      <use
        fill="url(#hush_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#hush_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#hush_svg__d)" xlinkHref="#hush_svg__e" />
      <use fill="#FFF" xlinkHref="#hush_svg__e" />
    </g>
  </svg>
);

export default SvgHush;
