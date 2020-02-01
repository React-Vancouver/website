import React from 'react';
import PropTypes from 'prop-types';

const LogotypePrimary = ({ className }) => (
    <svg
        alt="React Vancouver logo"
        className={className}
        fill="none"
        viewBox="0 0 492 43"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#68E0CF"
            fillRule="evenodd"
            d="M.694 16.233l18.914-12.25V10.5L6.623 18.634v.196l12.985 8.134v6.517L.694 21.231v-4.998zM44.487 35l-6.125-11.515H34.59V35h-7.202V3.052h11.319c1.698 0 3.29.163 4.777.49 1.486.327 2.793.874 3.92 1.642 1.127.767 2.017 1.788 2.67 3.062.654 1.274.98 2.858.98 4.753 0 2.352-.522 4.287-1.567 5.806a9.627 9.627 0 01-4.116 3.406L52.573 35h-8.086zM34.59 17.752h3.529c3.887 0 5.83-1.584 5.83-4.753 0-1.568-.49-2.662-1.47-3.283-.98-.62-2.433-.931-4.36-.931h-3.529v8.967zM55.598 22.848c0-1.993.35-3.773 1.053-5.341s1.642-2.9 2.818-3.994a12.501 12.501 0 014.042-2.523 12.987 12.987 0 014.729-.882c1.862 0 3.511.294 4.949.882 1.437.588 2.63 1.405 3.577 2.45.947 1.045 1.666 2.279 2.156 3.7.49 1.42.735 2.964.735 4.63 0 .653-.033 1.274-.098 1.862a13.51 13.51 0 01-.196 1.323H62.997c.261 1.83 1.053 3.144 2.376 3.945 1.323.8 2.883 1.2 4.68 1.2 1.11 0 2.164-.139 3.16-.417.997-.277 2.034-.694 3.112-1.249l2.352 4.312c-1.372.882-2.908 1.576-4.606 2.082-1.699.507-3.365.76-4.998.76-1.895 0-3.659-.286-5.292-.858-1.634-.571-3.055-1.404-4.263-2.498-1.209-1.095-2.164-2.426-2.867-3.994-.702-1.568-1.053-3.365-1.053-5.39zm17.542-2.646c0-1.372-.376-2.483-1.127-3.332-.752-.85-1.96-1.274-3.626-1.274-1.307 0-2.467.376-3.48 1.127-1.012.751-1.682 1.911-2.008 3.479h10.24zM84.838 28.238c0-1.372.294-2.572.882-3.601.588-1.03 1.527-1.903 2.818-2.622 1.29-.719 2.948-1.299 4.973-1.74 2.026-.44 4.476-.743 7.35-.906-.131-1.11-.612-1.976-1.445-2.597-.833-.62-2.083-.931-3.749-.931-1.176 0-2.36.204-3.552.612-1.193.409-2.475.956-3.847 1.642l-2.548-4.704a28.852 28.852 0 015.366-2.352 19.311 19.311 0 016.002-.931c3.397 0 6.076.898 8.036 2.695 1.96 1.797 2.94 4.557 2.94 8.281V35h-5.88l-.539-2.744h-.196a19.354 19.354 0 01-4.067 2.377 11.35 11.35 0 01-4.557.955c-1.241 0-2.352-.188-3.332-.563-.98-.376-1.813-.899-2.499-1.569a7.12 7.12 0 01-1.592-2.327c-.376-.882-.564-1.846-.564-2.891zm6.91-.539c0 .784.301 1.364.906 1.74.604.375 1.429.563 2.474.563a7.11 7.11 0 003.038-.662 14.313 14.313 0 002.695-1.641v-4.018c-1.797.098-3.283.261-4.459.49-1.176.229-2.107.515-2.793.858-.686.343-1.168.743-1.445 1.2a2.785 2.785 0 00-.417 1.47zM114.078 22.848c0-2.025.384-3.83 1.152-5.415.768-1.584 1.797-2.915 3.087-3.993 1.29-1.078 2.785-1.903 4.483-2.474a16.635 16.635 0 015.341-.858c1.928 0 3.667.31 5.219.931 1.552.62 2.85 1.405 3.895 2.352l-3.332 4.459c-1.796-1.274-3.593-1.911-5.39-1.911-2.09 0-3.789.62-5.096 1.862-1.306 1.241-1.96 2.924-1.96 5.047 0 2.123.629 3.806 1.887 5.047 1.258 1.241 2.899 1.862 4.924 1.862 1.274 0 2.45-.229 3.528-.686a14.414 14.414 0 002.891-1.617l2.94 4.557a14.25 14.25 0 01-4.875 2.72c-1.78.571-3.504.857-5.17.857-1.927 0-3.707-.286-5.341-.858-1.633-.571-3.062-1.396-4.287-2.474-1.225-1.078-2.181-2.41-2.867-3.994-.686-1.584-1.029-3.389-1.029-5.414zM148.268 16.331h-6.125V10.99l6.468-.294.931-6.468h5.929v6.468h10.29v5.635h-10.29v8.526c0 1.862.408 3.177 1.225 3.945.816.767 2.107 1.151 3.871 1.151.947 0 1.813-.082 2.597-.245a16.335 16.335 0 002.254-.637l1.274 5.194a42.746 42.746 0 01-3.602.907c-1.323.277-2.768.416-4.336.416-1.928 0-3.561-.261-4.9-.784-1.34-.523-2.426-1.25-3.259-2.18-.833-.932-1.429-2.05-1.788-3.357-.36-1.307-.539-2.76-.539-4.361v-8.575z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#6146FB"
            fillRule="evenodd"
            d="M173.403 2.905h5.194l4.851 16.709a146.196 146.196 0 011.47 5.267c.425 1.65.915 3.406 1.47 5.268h.196a102.34 102.34 0 001.519-5.268c.425-1.65.915-3.405 1.47-5.267l4.802-16.709h4.998L189.279 35h-5.733L173.403 2.905zM201.358 28.68c0-1.34.319-2.516.956-3.529s1.633-1.878 2.989-2.597c1.355-.719 3.103-1.307 5.243-1.764 2.139-.457 4.712-.8 7.717-1.029-.065-1.47-.547-2.728-1.445-3.773-.899-1.045-2.409-1.568-4.533-1.568-1.47 0-2.899.278-4.287.833a28.97 28.97 0 00-3.847 1.862l-1.813-3.283a33.264 33.264 0 012.205-1.2 22.599 22.599 0 012.622-1.103 20.908 20.908 0 012.891-.784 15.824 15.824 0 013.062-.294c3.332 0 5.831.898 7.497 2.695 1.666 1.797 2.499 4.28 2.499 7.448V35h-3.969l-.392-3.087h-.147a22.598 22.598 0 01-4.287 2.573c-1.585.735-3.21 1.102-4.876 1.102-1.143 0-2.213-.163-3.209-.49-.997-.327-1.854-.792-2.573-1.396a6.494 6.494 0 01-1.69-2.181c-.409-.85-.613-1.797-.613-2.842zm4.704-.344c0 1.209.466 2.074 1.397 2.597.931.523 2.05.784 3.356.784 1.274 0 2.524-.278 3.749-.833 1.225-.555 2.458-1.34 3.699-2.352v-5.684c-2.352.196-4.312.45-5.88.76-1.568.31-2.817.702-3.748 1.176-.931.473-1.593 1.004-1.985 1.592a3.457 3.457 0 00-.588 1.96zM230.893 11.039h3.969l.392 3.871h.196a20.39 20.39 0 013.92-3.16c1.404-.866 3.038-1.299 4.9-1.299 2.809 0 4.867.833 6.174 2.499 1.306 1.666 1.96 4.067 1.96 7.203V35h-4.851V20.79c0-2.09-.376-3.634-1.127-4.63-.752-.997-2.042-1.495-3.871-1.495-1.274 0-2.418.319-3.43.956-1.013.637-2.14 1.592-3.381 2.866V35h-4.851V11.039zM259.251 23.044c0-1.993.359-3.773 1.078-5.341.719-1.568 1.699-2.89 2.94-3.969a12.811 12.811 0 014.287-2.45c1.617-.555 3.341-.833 5.17-.833 1.96 0 3.675.335 5.145 1.005 1.47.67 2.695 1.478 3.675 2.425l-2.352 3.087c-.947-.784-1.927-1.396-2.94-1.838a8.133 8.133 0 00-3.283-.661c-1.274 0-2.45.204-3.528.613-1.078.408-2.001.988-2.769 1.739a7.823 7.823 0 00-1.788 2.72c-.425 1.061-.637 2.229-.637 3.503s.204 2.442.612 3.504a7.55 7.55 0 001.764 2.719 8.01 8.01 0 002.72 1.74c1.045.408 2.205.612 3.479.612 1.47 0 2.793-.278 3.969-.833a15.033 15.033 0 003.185-2.009l2.058 3.136a15.602 15.602 0 01-4.508 2.72 13.9 13.9 0 01-5.096.955c-1.862 0-3.602-.278-5.219-.833-1.617-.555-3.013-1.372-4.189-2.45-1.176-1.078-2.099-2.393-2.769-3.945-.669-1.551-1.004-3.323-1.004-5.316zM287.217 23.044c0-1.993.327-3.773.98-5.341s1.535-2.89 2.646-3.969a11.27 11.27 0 013.822-2.45 12.404 12.404 0 014.508-.833 12.4 12.4 0 014.508.833 11.27 11.27 0 013.822 2.45c1.111 1.078 1.993 2.401 2.646 3.969.653 1.568.98 3.348.98 5.341 0 1.993-.327 3.765-.98 5.316-.653 1.552-1.535 2.867-2.646 3.945a11.269 11.269 0 01-3.822 2.45 12.4 12.4 0 01-4.508.833c-1.568 0-3.07-.278-4.508-.833a11.269 11.269 0 01-3.822-2.45c-1.111-1.078-1.993-2.393-2.646-3.945-.653-1.551-.98-3.323-.98-5.316zm4.998 0c0 2.58.621 4.655 1.862 6.223 1.241 1.568 2.94 2.352 5.096 2.352s3.855-.784 5.096-2.352c1.241-1.568 1.862-3.642 1.862-6.223 0-2.58-.621-4.655-1.862-6.223-1.241-1.568-2.94-2.352-5.096-2.352s-3.855.784-5.096 2.352c-1.241 1.568-1.862 3.642-1.862 6.223zM338.409 35h-3.969l-.392-3.969h-.196c-1.176 1.372-2.458 2.474-3.846 3.308-1.388.833-2.997 1.249-4.827 1.249-2.842 0-4.916-.825-6.223-2.474-1.306-1.65-1.96-4.06-1.96-7.228V11.039h4.851v14.21c0 2.123.376 3.683 1.127 4.68.752.996 2.042 1.494 3.871 1.494 1.242 0 2.377-.302 3.406-.906 1.029-.605 2.131-1.626 3.307-3.063V11.039h4.851V35zM344.62 11.039h4.9l5.047 13.034c.457 1.209.89 2.401 1.298 3.577a309.64 309.64 0 001.25 3.528h.196a153.8 153.8 0 001.225-3.528 93.862 93.862 0 011.274-3.577l5.047-13.034h4.655L359.908 35h-5.488l-9.8-23.961zM374.497 23.044c0-1.96.343-3.716 1.029-5.267.686-1.552 1.601-2.875 2.744-3.97a11.801 11.801 0 013.92-2.498 12.469 12.469 0 014.557-.858c1.764 0 3.324.278 4.68.833 1.355.555 2.507 1.331 3.454 2.327.947.997 1.666 2.19 2.156 3.578.49 1.388.735 2.915.735 4.581 0 .49-.024.956-.073 1.396-.049.442-.107.809-.172 1.103h-18.032c.163 2.352 1.037 4.19 2.622 5.513 1.584 1.323 3.585 1.984 6.002 1.984 1.307 0 2.524-.18 3.651-.539a15.394 15.394 0 003.307-1.519l1.715 3.087c-1.241.784-2.638 1.445-4.189 1.984-1.552.54-3.259.81-5.121.81-1.797 0-3.487-.287-5.071-.858-1.585-.572-2.965-1.397-4.141-2.475-1.176-1.078-2.099-2.393-2.768-3.944-.67-1.552-1.005-3.308-1.005-5.268zm18.767-2.107c0-2.156-.555-3.806-1.666-4.949-1.111-1.143-2.695-1.715-4.753-1.715-1.797 0-3.397.572-4.802 1.715-1.405 1.143-2.27 2.793-2.597 4.949h13.818zM406.02 11.039h4.018l.392 5.586h.147c1.242-1.96 2.753-3.479 4.533-4.557 1.78-1.078 3.748-1.617 5.904-1.617.948 0 1.781.073 2.499.22.719.148 1.454.4 2.205.76l-1.078 4.165a24.55 24.55 0 00-2.107-.588c-.588-.13-1.339-.196-2.254-.196-1.731 0-3.397.49-4.998 1.47-1.6.98-3.07 2.679-4.41 5.096V35h-4.851V11.039z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#F8736B"
            fillRule="evenodd"
            d="M445.604 42.84h-6.027L455.698.21h6.027l-16.121 42.63z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#68E0CF"
            fillRule="evenodd"
            d="M491.76 21.231l-18.914 12.25v-6.517l12.985-8.134v-.196L472.846 10.5V3.983l18.914 12.25v4.998z"
            clipRule="evenodd"
        ></path>
    </svg>
);

LogotypePrimary.propTypes = {
    className: PropTypes.string,
};

export default React.memo(LogotypePrimary);
