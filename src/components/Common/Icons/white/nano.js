import React from 'react';

const SvgNano = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.95-21c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 0 0-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166h-.132c-1.385 0-1.583-.33-1.583-1.583a1.584 1.584 0 0 0-3.166 0c0 1.254-.198 1.55-1.583 1.55h-.132a1.548 1.548 0 0 0-1.419 1.55c0 .858.693 1.584 1.584 1.584.824 0 1.517-.66 1.55-1.451v-.1c0-1.154.363-1.583 1.583-1.583s1.583.43 1.583 1.55c0 .858.693 1.584 1.583 1.584.891 0 1.584-.693 1.584-1.583a1.597 1.597 0 0 0-1.452-1.518zm-9.565 6.267a1.583 1.583 0 1 0 0-3.166 1.583 1.583 0 0 0 0 3.166z"
      fill="#FFF"
    />
  </svg>
);

export default SvgNano;
