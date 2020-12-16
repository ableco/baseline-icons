import * as React from 'react';
import cx from 'clsx';

type className = string | { [className: string]: boolean } | className[];

type BaseProps = { className?: className };

export function Add(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.238 11.156h-7.465V3.88a.843.843 0 10-1.688 0v7.277h-7.3a.843.843 0 100 1.688h7.3v7.3a.843.843 0 101.688 0v-7.3h7.465a.843.843 0 100-1.688z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Subtract(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <rect
        x={1.75}
        y={11}
        width={20.5}
        height={1.75}
        rx={0.875}
        fill="currentColor"
      />
    </svg>
  );
}

export function CaretRight(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M6.954 1.788l11.463 9.448a.997.997 0 010 1.486l-11.463 9.49c-.642.572-1.66.117-1.66-.743V2.529c.003-.858 1.018-1.315 1.66-.74z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretDown(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M1.788 6.945l9.448 11.463a.997.997 0 001.486 0l9.494-11.463c.572-.643.118-1.66-.743-1.66H2.533c-.862 0-1.319 1.017-.745 1.66z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function ArrowDown(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <defs>
        <path id="a" d="M16.59 8L12 12.58 7.41 8 6 9.41 12 15.41 18 9.41z" />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="currentColor" xlinkHref="#a" />
        <g mask="url(#b)">
          <path fill="#FFF" d="M0 0H24V24H0z" />
          <path fill="#3D5186" fillRule="evenodd" d="M0 0H24V24H0z" />
        </g>
      </g>
    </svg>
  );
}

export function Users(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.367 10.96a5.482 5.482 0 00-1.623-1.095 4.778 4.778 0 001.74-1.516 4.58 4.58 0 00.835-2.64c0-2.59-2.169-4.697-4.836-4.697-1.01 0-1.977.299-2.797.864a4.712 4.712 0 00-1.624 1.925A4.885 4.885 0 008.52 2.3C5.852 2.301 3.683 4.408 3.683 7c0 .946.289 1.857.835 2.637a4.806 4.806 0 001.74 1.518 5.451 5.451 0 00-1.623 1.096c-1.04 1.011-1.616 2.352-1.616 3.775v3.847c0 1.168.98 2.121 2.184 2.121h6.638c.875 0 1.667-.514 2.008-1.29h5.958c1.202 0 2.183-.95 2.183-2.12v-3.85a5.249 5.249 0 00-1.623-3.773zm-6.094-7.397a3.142 3.142 0 012.21-.89c.837 0 1.62.315 2.21.89a2.973 2.973 0 010 4.293c-.59.575-1.373.89-2.21.89a3.142 3.142 0 01-2.21-.89 2.963 2.963 0 01-.917-2.147c0-.813.325-1.574.917-2.146zM5.39 6.999c0-.813.324-1.575.916-2.147a3.142 3.142 0 012.21-.89c.837 0 1.621.315 2.21.89a2.971 2.971 0 010 4.293c-.589.575-1.373.89-2.21.89a3.156 3.156 0 01-2.212-.89A2.975 2.975 0 015.39 7zm6.917 12.87a.439.439 0 01-.14.323.475.475 0 01-.332.135H5.198a.466.466 0 01-.471-.457v-3.848c0-.978.394-1.901 1.113-2.6a3.818 3.818 0 012.677-1.081c1.008 0 1.958.383 2.677 1.081.012.012.024.024.031.033l.008.01a3.6 3.6 0 011.075 2.56v3.845zm-.424-8.065a5.466 5.466 0 00-1.106-.652 4.786 4.786 0 002.16-2.245c.37.386.803.71 1.282.956a5.495 5.495 0 00-1.624 1.095 5.704 5.704 0 00-.712.846zm8.39 6.779a.466.466 0 01-.472.457H14.02v-3.018a5.171 5.171 0 00-.919-2.948 3.816 3.816 0 013.382-2.023c1.008 0 1.958.384 2.677 1.082a3.601 3.601 0 011.113 2.6v3.85z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function User(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M19.205 18.61a7.8 7.8 0 00-1.676-2.485 7.8 7.8 0 00-3.455-2.013 6.435 6.435 0 002.492-1.552 6.415 6.415 0 001.891-4.563c0-1.723-.67-3.345-1.891-4.563a6.415 6.415 0 00-4.564-1.892c-1.722 0-3.344.67-4.563 1.892a6.415 6.415 0 00-1.891 4.563c0 1.723.67 3.344 1.891 4.563a6.435 6.435 0 002.491 1.552 7.8 7.8 0 00-3.455 2.013 7.8 7.8 0 00-2.29 5.529.843.843 0 101.688 0c0-1.638.638-3.178 1.796-4.336a6.091 6.091 0 014.336-1.795c1.638 0 3.178.637 4.336 1.795a6.091 6.091 0 011.795 4.336.843.843 0 101.687 0 7.863 7.863 0 00-.618-3.045zM7.233 7.996c0-2.63 2.14-4.767 4.767-4.767a4.773 4.773 0 014.767 4.767A4.771 4.771 0 0112 12.764a4.773 4.773 0 01-4.767-4.767z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function UserFolder(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M22.313 5.25H11.46l-.586-1.826A1.684 1.684 0 009.267 2.25h-7.58C.755 2.25 0 3.005 0 3.938v16.125c0 .932.755 1.687 1.688 1.687h20.625c.932 0 1.687-.755 1.687-1.688V6.938c0-.932-.755-1.687-1.688-1.687zM1.688 3.937h7.58l.419 1.313h-8V3.937zm20.625 16.125H1.688V6.938h20.625v13.125zM16.375 9a3.375 3.375 0 012.469 5.676c1.146.69 1.906 1.855 1.906 3.199a.875.875 0 01-1.743.11l-.007-.11c0-1.141-1.148-2.125-2.625-2.125s-2.625.984-2.625 2.125a.875.875 0 11-1.75 0c0-1.344.76-2.508 1.906-3.2A3.375 3.375 0 0116.376 9zm0 1.75a1.625 1.625 0 100 3.25 1.625 1.625 0 000-3.25z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Suitcase(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M22.313 6.313H17.5V3.688C17.5 2.755 16.745 2 15.812 2H8.189C7.255 2 6.5 2.755 6.5 3.688v2.624H1.687C.755 6.313 0 7.067 0 8v12.313C0 21.244.755 22 1.688 22h20.625c.932 0 1.687-.755 1.687-1.688V8c0-.933-.755-1.688-1.688-1.688zM8.188 3.688h7.624v2.624H8.189V3.688zm14.124 16.625H1.688V8h20.625v12.313z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Spinner(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M23 12.844a.843.843 0 01-.844-.844c0-1.392-.272-2.742-.81-4.015a10.323 10.323 0 00-2.21-3.279 10.259 10.259 0 00-7.292-3.019.843.843 0 110-1.687c1.62 0 3.192.316 4.67.945 1.43.602 2.713 1.47 3.814 2.57A11.979 11.979 0 0122.9 7.33c.626 1.479.942 3.051.942 4.671a.84.84 0 01-.841.844z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Smile(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zm-4.284-6.044a.843.843 0 00-.844.844c0 1.193-.97 2.163-2.163 2.163a2.166 2.166 0 01-2.163-2.163.843.843 0 10-1.688 0A3.855 3.855 0 0012 17.94a3.855 3.855 0 003.85-3.85.843.843 0 00-.843-.844zM4.552 8.963a1.406 1.406 0 102.812 0 1.406 1.406 0 00-2.812 0zm12.077 0a1.406 1.406 0 102.812 0 1.406 1.406 0 00-2.812 0z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Projects(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M17.375 12a5.375 5.375 0 110 10.75 5.375 5.375 0 010-10.75zm-6.5.5c.483 0 .875.392.875.875v8a.875.875 0 01-.875.875h-8A.875.875 0 012 21.375v-8c0-.483.392-.875.875-.875zm6.5 1.25a3.625 3.625 0 100 7.25 3.625 3.625 0 000-7.25zm-7.375.5H3.75v6.25H10v-6.25zm1.128-12.831a.875.875 0 011.494 0l5.5 9a.875.875 0 01-.747 1.331h-11a.875.875 0 01-.747-1.331zm.747 2.134L7.934 10h7.881l-3.94-6.447z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Note(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.814 1.5c.93 0 1.686.757 1.686 1.688v17.625c0 .93-.756 1.687-1.686 1.687H3.186c-.93 0-1.686-.757-1.686-1.688V3.188c0-.93.756-1.687 1.686-1.687zm0 1.688H3.186v17.625h17.628V3.188zM9.671 15a.843.843 0 110 1.688H5.363a.843.843 0 110-1.688zm8.99-4.5a.843.843 0 110 1.688H5.363a.843.843 0 110-1.688zM18.567 6c.518 0 .936.377.936.844 0 .466-.418.843-.936.843H5.457c-.518 0-.937-.377-.937-.843 0-.467.419-.844.937-.844z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Meh(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zM4.551 8.962a1.406 1.406 0 102.813 0 1.406 1.406 0 00-2.812 0zm12.078 0a1.406 1.406 0 102.812 0 1.406 1.406 0 00-2.812 0zm-1.563 7.58H8.878a.843.843 0 100 1.688h6.188a.843.843 0 100-1.688z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Loading(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 24c-1.62 0-3.192-.316-4.671-.942a11.96 11.96 0 01-3.813-2.574A11.96 11.96 0 010 12a.843.843 0 111.688 0 10.297 10.297 0 003.021 7.294A10.259 10.259 0 0012 22.312a10.297 10.297 0 007.294-3.021A10.259 10.259 0 0022.312 12c0-1.392-.271-2.742-.81-4.015a10.323 10.323 0 00-2.21-3.279A10.259 10.259 0 0012 1.687.843.843 0 1112 0c1.62 0 3.192.316 4.671.942a11.96 11.96 0 013.813 2.574 11.979 11.979 0 012.571 3.813c.626 1.479.943 3.051.943 4.671s-.317 3.192-.943 4.671a11.915 11.915 0 01-2.57 3.813A11.979 11.979 0 0112 24z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Home(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M23.26 13.91l-9.966 9.592a1.925 1.925 0 01-2.585 0L.739 13.91a.962.962 0 111.291-1.43L12 22.07l9.97-9.592a.962.962 0 111.291 1.43zm-2.662-3.557a.964.964 0 01-.964-.965v-7.42h-3.83v6.43a1.927 1.927 0 01-1.929 1.928h-3.75a1.927 1.927 0 01-1.929-1.929V1.97h-3.83v7.42a.964.964 0 11-1.929 0v-7.42C2.438.903 3.3.04 4.367.04h15.267c1.066 0 1.928.863 1.928 1.929v7.42a.964.964 0 01-.964.964zM10.125 8.397h3.75V1.97h-3.75v6.428z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
          transform="rotate(-180 12 12.02)"
        />
      </g>
    </svg>
  );
}

export function Frown(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zm-4.284-1.35a.843.843 0 01-.844-.843c0-1.193-.97-2.164-2.163-2.164-1.193 0-2.163.97-2.163 2.164a.843.843 0 11-1.688 0A3.855 3.855 0 0112 13.247a3.855 3.855 0 013.85 3.85.843.843 0 01-.843.844zM4.552 8.963a1.406 1.406 0 102.812 0 1.406 1.406 0 00-2.812 0zm12.077 0a1.406 1.406 0 102.812 0 1.406 1.406 0 00-2.812 0z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function EllipsisHorizontal(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M4.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function EllipsisVertical(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M4.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
          transform="rotate(90 12 12)"
        />
      </g>
    </svg>
  );
}

export function Edit(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M21.156 21.312H1.844a.843.843 0 100 1.687h19.312a.843.843 0 100-1.687zM6.438 18.546l5.519-2.336a.776.776 0 00.24-.16l9.308-9.31a1.693 1.693 0 00.005-2.39l-1.858-1.858a1.693 1.693 0 00-2.391.004l-9.31 9.31a.75.75 0 00-.159.239l-2.339 5.517a.742.742 0 00.16.823.74.74 0 00.824.161zM18.453 3.69l.005-.004 1.856 1.856-.005.005-1.453 1.453-1.856-1.857 1.453-1.453zm-9.18 9.18l6.534-6.534 1.856 1.857-6.534 6.534-3.22 1.364 1.363-3.22z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Download(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M11.45 18.382a.81.81 0 001.148 0l3.654-3.654a.81.81 0 00-1.144-1.146l-2.271 2.271V2.311a.811.811 0 00-1.622 0v13.542l-2.271-2.271a.808.808 0 00-1.144 0 .813.813 0 00-.002 1.146l3.651 3.654zm10.24-3.373a.811.811 0 00-.812.811v4.58a.484.484 0 01-.483.483H3.602a.484.484 0 01-.482-.483v-4.582a.81.81 0 10-1.62 0v5.224c0 .804.654 1.456 1.455 1.456h18.09c.803 0 1.455-.654 1.455-1.456v-5.224a.81.81 0 00-.81-.809z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Delete(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M4.197 22.238a1.131 1.131 0 01-.1-.1c.036.036.066.072.1.1zm-.224-.128zM22.275 4.768a.885.885 0 00-.616-.248h-4.321V3.174c0-.91-.74-1.65-1.65-1.65H8.31c-.91 0-1.65.74-1.65 1.65V4.52H2.318a.839.839 0 000 1.676h.74v14.587c0 .91.74 1.65 1.65 1.65h14.818c.91 0 1.65-.74 1.65-1.65V6.196h.483c.46 0 .861-.374.861-.838a.825.825 0 00-.245-.59zM8.308 3.178h7.372v1.356H8.308V3.18zm11.216 17.603H4.708V6.196h14.815v14.585h.001zM11.988 9.005a.842.842 0 00-.842.843v7.819a.842.842 0 101.685 0v-7.82a.842.842 0 00-.843-.842zm-4.564 0a.842.842 0 00-.843.843v7.819a.842.842 0 101.685 0v-7.82a.843.843 0 00-.842-.842zm9.083 0a.842.842 0 00-.843.843v7.819a.842.842 0 101.685 0v-7.82a.842.842 0 00-.842-.842z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CustomerService(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <defs>
        <path
          d="M19.617 7.434a7.672 7.672 0 00-2.107-3.677A7.928 7.928 0 0015 2.107a8.038 8.038 0 00-3.07-.605c-1.06 0-2.093.204-3.068.605a7.875 7.875 0 00-2.51 1.65 7.658 7.658 0 00-2.117 3.708A4.037 4.037 0 002.29 8.892a4.1 4.1 0 00-.813 2.466 4.08 4.08 0 001.202 2.897c.57.57 1.277.956 2.041 1.115a.826.826 0 00.764-.23.817.817 0 00.24-.59l-.036-5.323A5.94 5.94 0 017.507 4.95a6.295 6.295 0 014.42-1.784c1.67 0 3.24.633 4.42 1.782a5.94 5.94 0 011.82 4.277v5.55a5.94 5.94 0 01-1.82 4.277 6.172 6.172 0 01-1.682 1.172 2.717 2.717 0 00-.757-2.374 2.711 2.711 0 00-1.856-.804h-.07c-.727 0-1.412.284-1.927.8-.516.515-.8 1.2-.8 1.926 0 .717.277 1.397.783 1.91a2.707 2.707 0 001.892.816H12.052a7.96 7.96 0 002.95-.605 7.875 7.875 0 002.51-1.65 7.658 7.658 0 001.697-2.454 7.598 7.598 0 00.614-2.594 4.045 4.045 0 001.454-.945 4.07 4.07 0 001.202-2.895c-.002-1.809-1.172-3.405-2.862-3.92zM1.891 12.673zm.232.52c.04.073.082.145.125.216-.043-.07-.085-.141-.125-.216zm1.601.016c-.023-.023-.047-.046-.068-.07.021.024.045.047.068.07l.056.057c-.018-.02-.037-.038-.056-.057zm.303.021a2.42 2.42 0 01-.886-1.873c0-.433.112-.86.323-1.232a2.39 2.39 0 01.563-.67v3.775zm.221.424l-.1-.1a.849.849 0 00.1.1zm.144-6.044zm.368 7.608a2.701 2.701 0 01-.234-.09c.077.03.154.064.234.09l.035.01-.035-.01zm.172-.019h-.05.09-.04zm.664-.614v-.035l-.095-5.323.095 5.323a.035.035 0 010 .035zm1.58-11.297zM8.933 2.28l.108-.042a.857.857 0 00-.108.042zm1.392.951c.061-.033.122-.072.183-.1-.059.034-.122.067-.183.1zm7.055.66a7.677 7.677 0 00-2.452-1.61l-.107-.043.107.042a7.702 7.702 0 012.583 1.742l-.131-.131zm.27.276zm.253.288c.063.075.124.153.185.23a5.667 5.667 0 00-.185-.23zM9.44 19.806v-.1.1zm2.538-2.572h.1-.1zm.76 3.28a1.055 1.055 0 01-.723.322h-.051a1.062 1.062 0 11.773-.321zm.475-.552a.34.34 0 00.06-.188c0-.02 0-.042-.01-.063 0 .021.01.042.01.063a.34.34 0 01-.06.188zm1.179.615l.021-.1-.021.1.108-.063c-.035.023-.07.043-.108.063zm2.986-.468c-.047.047-.096.092-.143.136l.143-.136zm.998-5.334v-5.55c0-.045 0-.091-.01-.136 0 .045.01.091.01.136v5.55zm.657 2.94l.051-.12-.051.12zm0-11.43zm.491 1.297c-.033-.05-.067-.096-.1-.143l.1.143zm.118 1.455zm.586 4.172a2.76 2.76 0 000 0c.012-.011.021-.023.033-.032-.012.009-.021.02-.033.032zm-.134-.133c-.084.084-.17.16-.265.23V9.38c.251.187.467.424.63.7.23.385.35.825.35 1.278a2.404 2.404 0 01-.715 1.718zm2.08-2.855c-.033-.051-.061-.103-.1-.152.034.049.067.1.1.152zm-.28-.593c.036.047.068.096.1.143-.032-.05-.068-.096-.1-.143zm.174 3.019c.036-.052.068-.106.1-.157-.028.054-.064.105-.1.157z"
          id="a"
        />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <mask fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#a"
        />
      </g>
    </svg>
  );
}

export function Close(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M13.305 11.998l5.972-5.968a.92.92 0 000-1.303.92.92 0 00-1.303 0L12 10.692 6.026 4.725a.92.92 0 00-1.303 0 .92.92 0 000 1.303l5.972 5.967-5.972 5.97a.92.92 0 00.651 1.573c.237 0 .471-.09.652-.27L12 13.301l5.974 5.97c.18.18.415.269.652.269a.92.92 0 00.652-1.573l-5.973-5.97z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CloseBold(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.06 3.94a1.5 1.5 0 01.104 2.007l-.103.114L14.12 12l5.94 5.94.103.113a1.5 1.5 0 01-2.225 2.008L12 14.12l-5.94 5.94a1.5 1.5 0 01-2.224-2.008l.103-.114L9.88 12l-5.94-5.94-.103-.113a1.5 1.5 0 012.225-2.008L12 9.88l5.94-5.94a1.5 1.5 0 012.12 0z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function CloseCircleFilled(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M12 0C5.37187 0 0 5.37187 0 12C0 18.6281 5.37187 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37187 18.6281 0 12 0Z"
        fill="currentColor"
      />
      <path
        d="M16.8093 7.17665C16.4788 6.84852 15.9444 6.84852 15.6163 7.17899L11.9999 10.8048L8.3835 7.17899C8.05537 6.84852 7.521 6.84852 7.19053 7.17665C6.86006 7.50477 6.86006 8.03915 7.18818 8.36962L10.8093 12.0001L7.18818 15.6306C6.86006 15.961 6.86006 16.4954 7.19053 16.8235C7.35459 16.9876 7.57022 17.0696 7.78584 17.0696C8.00147 17.0696 8.21943 16.9876 8.3835 16.8212L11.9999 13.1954L15.6163 16.8235C15.7804 16.9899 15.9983 17.072 16.214 17.072C16.4296 17.072 16.6452 16.9899 16.8093 16.8259C17.1397 16.4977 17.1397 15.9634 16.8116 15.6329L13.1905 12.0001L16.8093 8.36962C17.1397 8.03915 17.1397 7.50477 16.8093 7.17665Z"
        fill="white"
      />
    </svg>
  );
}

export function Clock(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zm-2.111-7.479h-4.336V6.189a.843.843 0 10-1.688 0v5.624c0 .933.755 1.688 1.688 1.688h4.336a.843.843 0 100-1.688z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Check(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M7.688 19.141a.94.94 0 01-.813-.473L3.14 12.136a.937.937 0 111.629-.93L7.89 16.67 19.4 5.128a.94.94 0 011.327-.002.94.94 0 01.002 1.326L8.395 18.822l-.044.045a.937.937 0 01-.664.274z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CheckBold(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M18.94 4.94a1.5 1.5 0 012.224 2.007l-.103.114L7.672 20.449l-4.974-8.705a1.5 1.5 0 012.527-1.61l.077.122 3.026 5.294L18.939 4.94z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function Chart(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M21.656 22.5H2.344a.843.843 0 01-.844-.843V2.343a.843.843 0 111.688 0v18.471h18.468a.843.843 0 110 1.686zm-12.61-5.08a.842.842 0 01-.705-.382l-3.68-5.853a.84.84 0 01.244-1.166.842.842 0 011.168.244l2.634 4.258 1.069-4.148a.844.844 0 01.45-.548l4.265-2.06a.845.845 0 011.086.316l2.144 3.472 3.134-9.451a.844.844 0 011.603.53l-3.703 11.166a.844.844 0 01-1.519.176l-2.695-4.36-3.228 1.56-1.448 5.614a.842.842 0 01-.818.632z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretUp(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M1.788 17.081l9.495-11.463a.997.997 0 011.486 0l9.447 11.463c.572.642.118 1.66-.743 1.66H2.53c-.858 0-1.315-1.018-.74-1.66z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretLeft(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M17.093 1.788L5.627 11.234a.997.997 0 000 1.486l11.464 9.494c.642.572 1.659.117 1.659-.743V2.53c0-.858-1.017-1.315-1.657-.74z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Calendar(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.813 3H18v-.656a.843.843 0 10-1.688 0V3H7.688v-.656a.843.843 0 10-1.687 0V3H3.187C2.256 3 1.5 3.755 1.5 4.688v16.125c0 .932.755 1.687 1.688 1.687h17.625c.932 0 1.687-.757 1.687-1.688V4.688C22.5 3.756 21.745 3 20.812 3zM3.188 4.688H6v.468a.843.843 0 101.688 0v-.468h8.625v.468a.843.843 0 101.687 0v-.468h2.813v2.625H3.188V4.688zm17.625 16.125H3.188V9h17.625v11.813zM6.75 12h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 110-1.5zm4.5 0h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 110-1.5zm4.5 0h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 110-1.5zm-9 4.547h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 110-1.5zm4.5 0h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 110-1.5z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CalendarEmpty(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.813 3H18v-.656a.843.843 0 10-1.688 0V3H7.688v-.656a.843.843 0 10-1.687 0V3H3.187C2.256 3 1.5 3.755 1.5 4.688v16.125c0 .932.755 1.687 1.688 1.687h17.625c.932 0 1.687-.757 1.687-1.688V4.688C22.5 3.756 21.745 3 20.812 3zM3.188 4.688H6v.468a.843.843 0 101.688 0v-.468h8.625v.468a.843.843 0 101.687 0v-.468h2.813v2.625H3.188V4.688zm17.625 16.125H3.188V9h17.625v11.813z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Bell(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.156 19.5H19.5V9a7.5 7.5 0 00-6.656-7.453V.844a.843.843 0 10-1.688 0v.703A7.5 7.5 0 004.5 9v10.5h-.656a.843.843 0 100 1.688h6.469v1.125a1.686 1.686 0 103.374 0v-1.125h6.47a.843.843 0 100-1.688zm-2.343 0H6.188V9A5.811 5.811 0 0112 3.187 5.811 5.811 0 0117.813 9v10.5z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Lock(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M19.358 6.621c-.406-1-.98-1.896-1.704-2.658a7.903 7.903 0 00-2.522-1.802 7.53 7.53 0 00-6.18.002 7.886 7.886 0 00-2.522 1.8 8.4 8.4 0 00-1.704 2.658A8.626 8.626 0 004.1 9.87v11.02c0 .9.696 1.631 1.554 1.631h12.771c.858 0 1.554-.731 1.55-1.631v-9.727l.004-.447V9.87a8.568 8.568 0 00-.621-3.249zM9.575 3.637h.005l.03-.011a5.821 5.821 0 012.43-.525c.842 0 1.662.178 2.433.52a6.457 6.457 0 012.016 1.44 6.84 6.84 0 011.38 2.155c.34.84.511 1.73.511 2.654v.693H5.7v-.696c0-.914.172-1.805.512-2.65a6.809 6.809 0 011.38-2.154 6.285 6.285 0 011.983-1.425zm8.813 8.522v8.728a.109.109 0 01-.005.033H5.705a.109.109 0 01-.004-.033V12.16h12.686zm-7.086 3.6v2.098a.743.743 0 001.486 0v-2.102c.394-.253.63-.68.63-1.153a1.376 1.376 0 00-2.75 0c.002.466.243.907.634 1.157z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function CaretLeftOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M16.955 20.993c-.225 0-.453-.075-.642-.225l-9.933-7.99a1.025 1.025 0 010-1.596l9.89-7.948a1.024 1.024 0 011.282 1.596L8.655 11.98l8.942 7.193a1.024 1.024 0 01-.642 1.821z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretRightOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M7.045 20.993c.225 0 .453-.075.643-.225l9.932-7.99a1.025 1.025 0 000-1.596L7.73 3.234A1.024 1.024 0 006.448 4.83l8.897 7.151-8.942 7.19a1.024 1.024 0 00.642 1.822z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretDownOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.993 7.034c0 .225-.075.452-.225.642l-7.99 9.933a1.025 1.025 0 01-1.596 0L3.234 7.718A1.024 1.024 0 014.83 6.436l7.151 8.897 7.19-8.942a1.024 1.024 0 011.822.643z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CaretUpOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <defs>
        <path
          d="M20.993 16.966c0-.225-.075-.452-.225-.642l-7.99-9.933a1.025 1.025 0 00-1.596 0l-7.948 9.891a1.024 1.024 0 001.596 1.282l7.151-8.897 7.19 8.942a1.024 1.024 0 001.822-.643z"
          id="a"
        />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M20.993 16.966c0-.225-.075-.452-.225-.642l-7.99-9.933a1.025 1.025 0 00-1.596 0l-7.948 9.891a1.024 1.024 0 001.596 1.282l7.151-8.897 7.19 8.942a1.024 1.024 0 001.822-.643z"
          fill="currentColor"
          fillOpacity={0.85}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Tag(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M22.542 14.252a1.72 1.72 0 00-.497-1.137L10.833 1.8a1.14 1.14 0 00-.809-.338h-6.81c-.966 0-1.75.774-1.75 1.73v6.99c0 .074.008.147.022.217l.012.054c.014.054.03.106.051.155.007.016.014.033.024.049.054.115.129.22.222.314l5.6 5.531 5.599 5.532c.129.126.272.23.424.309a1.772 1.772 0 002.05-.31l6.563-6.487a1.822 1.822 0 00.24-.295 1.587 1.587 0 00.126-.237 1.67 1.67 0 00.145-.762zm-1.687.082v.005c-.003.002-.003.005-.003.005l-.004.004-6.565 6.483a.055.055 0 01-.021.014c-.01.003-.019.005-.03.005a.078.078 0 01-.036-.007c-.005-.002-.01-.007-.016-.012L8.58 15.3 3.152 9.937V3.19c0-.014.021-.042.061-.042h6.58l11.05 11.151.007.007c.002.003.002.005.005.007l.002.007v.003c0 .002 0 .007-.002.011zM4.505 6.267a1.669 1.669 0 103.337 0 1.669 1.669 0 00-3.337 0z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function List(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M3 5.977a1.477 1.477 0 102.953 0 1.477 1.477 0 00-2.953 0zm17.154.68H8.487a.847.847 0 010-1.692h11.67c.466 0 .845.379.845.845a.848.848 0 01-.848.846zM3 11.956a1.477 1.477 0 102.953 0 1.477 1.477 0 00-2.953 0zm17.154.683H8.487a.847.847 0 010-1.692h11.67c.466 0 .845.38.845.846a.85.85 0 01-.848.846zM3 17.94a1.477 1.477 0 102.953 0 1.477 1.477 0 00-2.953 0zm17.154.681H8.487a.847.847 0 010-1.692h11.67c.466 0 .845.38.845.846a.848.848 0 01-.848.846z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function Bookmark(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M19 1H5a1 1 0 00-1 1v20l.006.114c.087.814 1.099 1.196 1.701.593L12 16.415l6.293 6.292c.63.63 1.707.184 1.707-.707V2a1 1 0 00-1-1zm-1 2v16.585l-5.293-5.292-.094-.083a1 1 0 00-1.32.083L6 19.584V3h12z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function HelpBubble(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0c1.612 0 3.178.295 4.652.874a12.031 12.031 0 013.81 2.395 11.16 11.16 0 012.585 3.572c.63 1.392.952 2.87.95 4.396a10.54 10.54 0 01-.952 4.394 11.206 11.206 0 01-2.585 3.572 12.031 12.031 0 01-3.81 2.395c-1.475.579-3.04.874-4.652.874-1.282 0-2.54-.187-3.745-.558L4.777 23.89a.839.839 0 01-.797.019.839.839 0 01-.457-.654l-.54-4.608C1.057 16.594 0 13.974 0 11.235c0-1.523.321-3.002.952-4.394C1.562 5.5 2.43 4.3 3.538 3.269A12.031 12.031 0 017.348.874 12.675 12.675 0 0112 0zm0 1.687c-1.4 0-2.756.256-4.03.757a10.38 10.38 0 00-3.282 2.06A9.507 9.507 0 002.49 7.54a8.877 8.877 0 00-.801 3.696c0 2.388.958 4.675 2.697 6.437a.84.84 0 01.237.495l.426 3.625 2.693-1.53a.844.844 0 01.689-.066c1.139.39 2.341.586 3.567.586 1.399 0 2.756-.253 4.033-.757a10.38 10.38 0 003.28-2.06 9.507 9.507 0 002.199-3.034 8.916 8.916 0 00.002-7.392 9.517 9.517 0 00-2.198-3.035 10.339 10.339 0 00-3.28-2.06A10.988 10.988 0 0012 1.687zm-.365 14.614c.35 0 .65.126.902.377.25.25.376.551.376.902 0 .232-.058.445-.174.639-.116.194-.27.349-.462.465a1.218 1.218 0 01-.642.174 1.23 1.23 0 01-.902-.376 1.23 1.23 0 01-.377-.902c0-.35.126-.651.377-.902.25-.251.551-.377.902-.377zM12.032 4c.834 0 1.56.166 2.177.497a3.59 3.59 0 011.435 1.364c.338.577.508 1.236.508 1.974 0 .521-.08.992-.238 1.414a3.567 3.567 0 01-.682 1.129 4.75 4.75 0 01-1.069.88c-.417.26-.75.534-1.001.82-.251.287-.434.627-.547 1.02a4.677 4.677 0 00-.154.864v.001a.854.854 0 01-1.705-.105c.039-.584.124-1.064.254-1.449.18-.535.435-.968.767-1.3.331-.331.729-.636 1.193-.916.28-.17.53-.373.753-.607a2.6 2.6 0 00.724-1.836c0-.464-.109-.866-.327-1.207a2.194 2.194 0 00-.873-.789 2.649 2.649 0 00-1.215-.277c-.388 0-.762.08-1.122.242-.36.16-.66.414-.902.76-.241.345-.38.798-.419 1.356V7.83a.896.896 0 01-.782.897l-.112.007a.895.895 0 01-.887-1.018c.05-.754.258-1.403.62-1.948a3.733 3.733 0 011.513-1.313C10.568 4.152 11.265 4 12.032 4z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Magnifier(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 32 32"
      {...props}
      className={className}
    >
      <path d="M30.145 25.727c.255.255.382.565.382.93 0 .364-.127.674-.382.929l-1.532 1.531a1.266 1.266 0 01-.93.383c-.364 0-.674-.128-.93-.383l-5.468-5.469a1.266 1.266 0 01-.383-.93v-.874c-2.041 1.604-4.375 2.406-7 2.406-3.135 0-5.815-1.112-8.039-3.336-2.224-2.224-3.336-4.904-3.336-8.039S3.64 7.06 5.863 4.835C8.087 2.613 10.767 1.5 13.903 1.5c3.135 0 5.814 1.112 8.038 3.336 2.224 2.224 3.336 4.904 3.336 8.039 0 2.625-.802 4.958-2.406 7h.875c.365 0 .675.128.93.383l5.469 5.469zm-21.22-7.875c1.386 1.349 3.045 2.023 4.977 2.023 1.933 0 3.582-.684 4.95-2.05 1.367-1.368 2.05-3.018 2.05-4.95 0-1.932-.683-3.582-2.05-4.95-1.368-1.366-3.017-2.05-4.95-2.05-1.932 0-3.582.684-4.949 2.05-1.367 1.368-2.05 3.018-2.05 4.95 0 1.932.674 3.591 2.023 4.977z" />
    </svg>
  );
}

export function HeartOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg viewBox="0 0 1024 1024" {...props} className={className}>
      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
    </svg>
  );
}

export function Heart(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg viewBox="0 0 1024 1024" {...props} className={className}>
      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );
}

export function Slack(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        d="M8.80062 0C7.47459 0 6.40188 1.07584 6.40188 2.40188C6.40188 3.03675 6.6552 3.64973 7.10242 4.10008C7.32536 4.32321 7.59009 4.5002 7.88148 4.62095C8.17287 4.74169 8.48521 4.80381 8.80062 4.80375H11.1994V2.40188C11.1994 1.07897 10.1267 0.00312744 8.80062 0ZM8.80062 6.405H2.39875C1.07271 6.405 0 7.48084 0 8.80688C0 10.1329 1.07584 11.2088 2.39875 11.2088H8.7975C10.1235 11.2088 11.1962 10.1329 11.1962 8.80688C11.1994 7.48084 10.1235 6.405 8.80062 6.405ZM15.1994 11.2088C16.5254 11.2088 17.6012 10.1329 17.5981 8.80688V2.40188C17.5981 1.07584 16.5254 0 15.1994 0C13.8733 0 12.8006 1.07584 12.8006 2.40188V8.80688C12.8006 10.136 13.8733 11.2088 15.1994 11.2088ZM24 8.80688C24 7.48084 22.9242 6.405 21.6012 6.405C20.2783 6.405 19.2025 7.48084 19.2025 8.80688V11.2088H21.6012C22.9242 11.2088 24 10.1329 24 8.80688ZM21.5981 12.81H15.1994C13.8733 12.81 12.8006 13.8858 12.8006 15.2119C12.8006 15.8468 13.0539 16.4597 13.5012 16.9101C13.7241 17.1332 13.9888 17.3102 14.2802 17.431C14.5716 17.5517 14.884 17.6138 15.1994 17.6138H21.5981C22.9242 17.6138 23.9969 16.5379 23.9969 15.2119C24 13.8858 22.9242 12.8131 21.5981 12.81ZM15.1994 19.215H12.8006V21.6169C12.8006 22.9429 13.8765 24.0188 15.1994 24.0188C16.5254 24.0188 17.6012 22.9429 17.5981 21.6169C17.6012 20.2909 16.5254 19.2181 15.1994 19.215ZM8.80062 12.81C7.47459 12.81 6.40188 13.8858 6.40188 15.2119V21.6169C6.40188 22.9429 7.47772 24.0188 8.80062 24.0188C10.1267 24.0188 11.2025 22.9429 11.1994 21.6169V15.2119C11.1994 14.577 10.9461 13.964 10.4988 13.5137C10.0482 13.0636 9.43752 12.8105 8.80062 12.81ZM0 15.2119C0 15.8468 0.253323 16.4597 0.700547 16.9101C0.923484 17.1332 1.18822 17.3102 1.47961 17.431C1.771 17.5517 2.08333 17.6138 2.39875 17.6138C3.72478 17.6138 4.80062 16.5379 4.7975 15.2119V12.81H2.39875C1.07584 12.81 0 13.8858 0 15.2119Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Copy(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg viewBox="0 0 1024 1024" {...props} className={className}>
      <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
    </svg>
  );
}

export function PlusCircle(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37187 0 0 5.37187 0 12C0 18.6281 5.37187 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37187 18.6281 0 12 0ZM19.2914 19.2914C18.3445 20.2383 17.2406 20.9836 16.0125 21.5016C14.7422 22.0406 13.3922 22.3125 12 22.3125C10.6078 22.3125 9.25781 22.0406 7.9875 21.5039C6.75938 20.9836 5.65781 20.2406 4.70859 19.2938C3.76172 18.3469 3.01641 17.243 2.49844 16.0148C1.95938 14.7422 1.6875 13.3922 1.6875 12C1.6875 10.6078 1.95938 9.25781 2.49609 7.9875C3.01641 6.75938 3.75938 5.65781 4.70625 4.70859C5.65312 3.76172 6.75703 3.01641 7.98516 2.49844C9.25781 1.95938 10.6078 1.6875 12 1.6875C13.3922 1.6875 14.7422 1.95938 16.0125 2.49609C17.2406 3.01641 18.3422 3.75938 19.2914 4.70625C20.2383 5.65312 20.9836 6.75703 21.5016 7.98516C22.0406 9.25781 22.3125 10.6078 22.3125 12C22.3125 13.3922 22.0406 14.7422 21.5039 16.0125C20.9836 17.2406 20.2406 18.3445 19.2914 19.2914ZM12.8555 11.168H17.1562C17.6227 11.168 18 11.5453 18 12.0117C18 12.4781 17.6227 12.8555 17.1562 12.8555H12.8555V17.1328C12.8555 17.5992 12.4781 17.9766 12.0117 17.9766C11.5453 17.9766 11.168 17.5992 11.168 17.1328V12.8555H6.84375C6.37734 12.8555 6 12.4781 6 12.0117C6 11.5453 6.37734 11.168 6.84375 11.168H11.168V6.86719C11.168 6.40078 11.5453 6.02344 12.0117 6.02344C12.4781 6.02344 12.8555 6.40078 12.8555 6.86719V11.168Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BoxChecked(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M16.907 7.164l-7.676 7.7L7.23 11.36a.842.842 0 00-1.15-.315.842.842 0 00-.315 1.151l2.55 4.465a.845.845 0 001.36.15L18.1 8.36a.844.844 0 00-.002-1.193.837.837 0 00-1.19-.003zm3.919-3.986v17.65H3.177V3.178h17.649zm0-1.688H3.177c-.932 0-1.687.755-1.687 1.688v17.65c0 .933.755 1.688 1.688 1.688h17.65c.933 0 1.688-.755 1.688-1.688V3.178a1.691 1.691 0 00-1.69-1.688z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CheckCircleOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M16.905 7.162l-7.675 7.7-2.002-3.504a.842.842 0 00-1.15-.314.842.842 0 00-.315 1.15l2.55 4.465a.845.845 0 001.36.15l8.425-8.451a.844.844 0 00-.002-1.193.837.837 0 00-1.19-.003zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CheckCircleFilled(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M12 0C5.37187 0 0 5.37187 0 12C0 18.6281 5.37187 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37187 18.6281 0 12 0Z"
        fill="currentColor"
      />
      <path
        d="M16.9054 7.16242L9.22962 14.8616L7.22806 11.3577C6.99603 10.9523 6.48275 10.8116 6.07728 11.0437C5.67181 11.2757 5.53119 11.789 5.76322 12.1944L8.31322 16.6593C8.4679 16.9312 8.75384 17.0859 9.04681 17.0859C9.18978 17.0859 9.33275 17.0507 9.464 16.9757C9.539 16.9312 9.60697 16.8796 9.66322 16.8187C9.66556 16.8163 9.67025 16.8116 9.67259 16.8093L18.0984 8.35773C18.4265 8.02726 18.4265 7.49288 18.096 7.16476C17.7679 6.83195 17.2359 6.83195 16.9054 7.16242Z"
        fill="white"
      />
    </svg>
  );
}

export function ArrowRight(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M4.054 10.654H17.5c.003 0 .005-.005.003-.005L12.43 5.774a1.03 1.03 0 111.43-1.486l6.906 6.638a1.032 1.032 0 010 1.486l-6.944 6.673a1.027 1.027 0 01-1.458-.029 1.032 1.032 0 01.028-1.457l5.072-4.875c.002-.003 0-.005-.002-.005H4.03c-.549 0-.996-.429-1.03-.968a1.047 1.047 0 011.053-1.097z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function AddCircleOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zm-2.135-8.123h-4.3v-4.3a.843.843 0 10-1.688 0v4.3H6.844a.843.843 0 100 1.688h4.324v4.277a.843.843 0 101.688 0v-4.278h4.3a.843.843 0 100-1.688z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function CommentOutline(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0c1.612 0 3.178.295 4.652.874a12.031 12.031 0 013.81 2.395 11.16 11.16 0 012.585 3.572c.63 1.392.952 2.87.95 4.396a10.54 10.54 0 01-.952 4.394 11.206 11.206 0 01-2.585 3.572 12.031 12.031 0 01-3.81 2.395c-1.475.579-3.04.874-4.652.874-1.282 0-2.54-.187-3.745-.558L4.777 23.89a.839.839 0 01-.797.019.839.839 0 01-.457-.654l-.54-4.608C1.057 16.594 0 13.974 0 11.235c0-1.523.321-3.002.952-4.394C1.562 5.5 2.43 4.3 3.538 3.269A12.031 12.031 0 017.348.874 12.675 12.675 0 0112 0zm0 1.687c-1.4 0-2.756.256-4.03.757a10.38 10.38 0 00-3.282 2.06A9.507 9.507 0 002.49 7.54a8.877 8.877 0 00-.801 3.696c0 2.388.958 4.675 2.697 6.437a.84.84 0 01.237.495l.426 3.625 2.693-1.53a.844.844 0 01.689-.066c1.139.39 2.341.586 3.567.586 1.399 0 2.756-.253 4.033-.757a10.38 10.38 0 003.28-2.06 9.507 9.507 0 002.199-3.034 8.916 8.916 0 00.002-7.392 9.517 9.517 0 00-2.198-3.035 10.339 10.339 0 00-3.28-2.06A10.988 10.988 0 0012 1.687zM6.844 9.96a1.288 1.288 0 11.002 2.576 1.288 1.288 0 01-.002-2.576zm10.312 0a1.29 1.29 0 11-.002 2.58 1.29 1.29 0 01.002-2.58zM12 9.96a1.29 1.29 0 11-.002 2.58A1.29 1.29 0 0112 9.96z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function FeedbackReceived(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M7.816 2c1.723 0 3.345.673 4.564 1.891a6.405 6.405 0 011.891 4.564 6.415 6.415 0 01-1.891 4.563 6.435 6.435 0 01-2.492 1.552 7.8 7.8 0 013.455 2.013 7.8 7.8 0 011.676 2.484c.408.966.614 1.988.618 3.045a.843.843 0 11-1.687 0 6.091 6.091 0 00-1.795-4.336 6.091 6.091 0 00-4.336-1.796 6.091 6.091 0 00-4.336 1.796 6.091 6.091 0 00-1.796 4.336.843.843 0 11-1.687 0 7.774 7.774 0 012.29-5.53 7.8 7.8 0 013.455-2.012 6.435 6.435 0 01-2.492-1.552 6.405 6.405 0 01-1.891-4.563c0-1.723.672-3.345 1.891-4.564A6.405 6.405 0 017.816 2zm7.302 10.782l-.016-.028-.015-.029a.895.895 0 01-.056-.148.846.846 0 01.104-.686l.01-.015a.854.854 0 01.072-.094L18.71 7.79a.85.85 0 011.35 1.028l-.07.092-2.267 2.589 5.427.001a.85.85 0 010 1.7l-5.428-.001 2.268 2.591a.85.85 0 01.001 1.118l-.081.082a.85.85 0 01-1.118.001l-.082-.081-3.5-4-.06-.078-.032-.05zM7.814 3.687a4.773 4.773 0 00-4.767 4.768 4.773 4.773 0 004.767 4.767 4.771 4.771 0 004.767-4.767c0-2.63-2.14-4.768-4.767-4.768z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Info(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 19.291a10.259 10.259 0 01-3.279 2.21c-1.27.54-2.62.811-4.012.811-1.392 0-2.742-.271-4.013-.808a10.323 10.323 0 01-3.278-2.21 10.259 10.259 0 01-2.21-3.28A10.233 10.233 0 011.686 12c0-1.392.272-2.742.81-4.013a10.323 10.323 0 012.21-3.278 10.259 10.259 0 013.278-2.21c1.273-.54 2.623-.812 4.015-.812 1.392 0 2.742.272 4.012.81 1.229.52 2.33 1.262 3.28 2.21.946.946 1.692 2.05 2.21 3.278.539 1.273.81 2.623.81 4.015a10.253 10.253 0 01-3.02 7.291zm-4.52-2.753h-1.998V8.332a.843.843 0 00-.843-.844H9.68a.843.843 0 100 1.688h1.406v7.362H9.089a.843.843 0 100 1.688l1.997-.001h3.684a.843.843 0 100-1.688zm-3.685-11.37a.844.844 0 101.687 0 .844.844 0 00-1.687 0z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function Lightbulb(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 .15c4.9 0 8.85 4.197 8.85 9.35 0 2.12-.622 3.425-2.177 5.44l-.49.638c-.977 1.308-1.332 2.114-1.332 3.284V21a2.85 2.85 0 01-2.85 2.85H10A2.85 2.85 0 017.15 21v-2.137c0-1.243-.401-2.076-1.524-3.537l-.515-.67C3.714 12.8 3.15 11.52 3.15 9.5 3.15 4.347 7.1.15 12 .15zm3.15 19.7h-6.3V21c0 .593.449 1.08 1.025 1.143l.125.007h4.001a1.15 1.15 0 001.15-1.15l-.001-1.15zM12 1.85c-3.937 0-7.15 3.414-7.15 7.65 0 1.657.477 2.658 1.823 4.401l.515.672c.995 1.334 1.496 2.325 1.627 3.577h2.335V12.5h1.7v5.65h2.336c.13-1.252.631-2.243 1.626-3.577l.215-.283.506-.659c1.189-1.58 1.617-2.562 1.617-4.131 0-4.236-3.213-7.65-7.15-7.65z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function LightbulbOn(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 .15c4.9 0 8.85 4.197 8.85 9.35 0 2.019-.564 3.3-1.96 5.156l-.706.922c-.917 1.226-1.287 2.012-1.329 3.069l-.004.215V21a2.85 2.85 0 01-2.682 2.845L14 23.85H10a2.85 2.85 0 01-2.845-2.683L7.15 21v-2.137c0-1.17-.355-1.977-1.334-3.285l-.705-.921C3.714 12.799 3.15 11.519 3.15 9.5 3.15 4.347 7.1.15 12 .15zm3.15 19.7h-6.3V21c0 .593.449 1.08 1.025 1.143l.125.007h4.001a1.15 1.15 0 001.144-1.025L15.15 21l-.001-1.15z"
          fillOpacity={0.85}
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function Forward(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M12.001 8.85h.849V4.067a.15.15 0 01.243-.118l8.399 6.65a1.15 1.15 0 010 1.803l-8.399 6.649a.15.15 0 01-.243-.118V14.15H12c-4.792 0-8.229 2.04-10.298 3.8-.081.069-.26.11-.448.029a.296.296 0 01-.13-.092s0 0 0 0c-.001-.001-.002-.001 0-.017.854-4.527 3.553-6.755 6.056-7.88a13.494 13.494 0 014.45-1.123 7.89 7.89 0 01.355-.017h.016z"
        stroke="currentColor"
        strokeWidth={1.7}
      />
    </svg>
  );
}

export function Drag(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM7 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM14 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-1.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
        fillOpacity={0.45}
      />
    </svg>
  );
}

export function AddUser(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.019 19.067a7.8 7.8 0 00-1.676-2.484 7.8 7.8 0 00-3.455-2.013 6.434 6.434 0 002.492-1.552 6.415 6.415 0 001.891-4.563c0-1.723-.67-3.345-1.891-4.564A6.415 6.415 0 007.816 2c-1.722 0-3.344.67-4.563 1.891a6.415 6.415 0 00-1.891 4.564c0 1.722.67 3.344 1.891 4.563a6.434 6.434 0 002.492 1.551 7.8 7.8 0 00-3.455 2.013A7.8 7.8 0 000 22.113a.843.843 0 101.688 0c0-1.639.637-3.178 1.795-4.336a6.091 6.091 0 014.336-1.796c1.638 0 3.178.638 4.336 1.796a6.091 6.091 0 011.795 4.336.843.843 0 101.688 0 7.863 7.863 0 00-.62-3.045zM3.047 8.455c0-2.63 2.14-4.768 4.767-4.768a4.773 4.773 0 014.767 4.768 4.771 4.771 0 01-4.767 4.767 4.773 4.773 0 01-4.767-4.767zM19.5 16.85a.85.85 0 01-.85-.85v-2.8h-2.8a.85.85 0 010-1.7h2.8V8.7a.85.85 0 011.7 0v2.8h2.8a.85.85 0 010 1.7h-2.8V16c0 .47-.38.85-.85.85z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Trash(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.275 4.768a.885.885 0 00-.616-.248h-4.321V3.174c0-.91-.74-1.65-1.65-1.65H8.31c-.91 0-1.65.74-1.65 1.65V4.52H2.318a.839.839 0 000 1.676h.74v14.587c0 .91.74 1.65 1.65 1.65h14.818c.91 0 1.65-.74 1.65-1.65V6.196h.483c.46 0 .861-.374.861-.838a.824.824 0 00-.245-.59zM3.973 22.11zm.124.028c.033.036.066.072.1.1-.021-.017-.04-.038-.061-.06l-.04-.04zM15.68 3.178H8.308v1.356h7.372V3.18zm3.844 17.603H4.708V6.196h14.815v14.585zM11.146 9.848a.842.842 0 111.685 0v7.819a.842.842 0 11-1.685 0v-7.82zm-3.722-.843a.842.842 0 00-.843.843v7.819a.842.842 0 101.685 0v-7.82a.843.843 0 00-.842-.842zm8.24.843a.842.842 0 111.685 0v7.819a.842.842 0 11-1.685 0v-7.82z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Able(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        d="M21.2073 17.3375V0.668754L20.6587 0L11.3788 2.6124L11.3813 3.37383C12.293 3.32874 12.9944 3.53914 13.4302 4.25297L4.94427 19.3738C3.63682 21.7007 2.26925 23.0307 0 23.0307V23.9123H9.45523V23.0307C5.7583 23.0307 4.91922 21.8785 6.22918 19.4941L7.93237 16.3331L14.5172 16.3256V19.5517C14.5172 21.876 13.7157 23.0332 11.3162 23.0332V23.9148H24V23.0332C21.5254 23.0307 21.2073 21.9862 21.2073 17.3375ZM8.46337 15.3563L14.5097 4.72386L14.5172 15.3563H8.46337Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Cake(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        d="M8 6V9.999H11V6H13V9.999H16V6H18V9.999L19 10C19.7652 9.99996 20.5015 10.2923 21.0583 10.8173C21.615 11.3422 21.9501 12.0601 21.995 12.824L22 13V14C22 15.014 21.623 15.94 21.001 16.645L21 21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V16.64C2.46267 16.0278 2.12374 15.2669 2.028 14.458L2.006 14.205L2 14V13C1.99996 12.2348 2.29233 11.4985 2.81728 10.9417C3.34224 10.385 4.06011 10.0499 4.824 10.005L5 10L6 9.999V6H8ZM9.002 16.641L8.948 16.704C8.2925 17.4197 7.39883 17.8722 6.434 17.977L6.204 17.995L6 18C5.655 18 5.32 17.956 5 17.874V20H19V17.874C18.3454 18.0423 17.6588 18.0422 17.0042 17.8739C16.3496 17.7055 15.7482 17.3743 15.256 16.911L15.106 16.761L15 16.644L14.893 16.762C14.2446 17.4428 13.3765 17.8727 12.442 17.976L12.2 17.996L12 18C10.9535 18.0015 9.9485 17.5905 9.203 16.856L9.053 16.699L9.002 16.641ZM19 12H5C4.75507 12 4.51866 12.09 4.33563 12.2527C4.15259 12.4155 4.03566 12.6397 4.007 12.883L4 13V13.971L4.003 14.118C4.0331 14.6272 4.25661 15.1057 4.62783 15.4555C4.99905 15.8053 5.48991 16.0001 6 16C6.47895 16.0008 6.94229 15.8297 7.30568 15.5177C7.66907 15.2057 7.90836 14.7736 7.98 14.3L7.995 14.147L8 13.971C8.036 12.723 9.827 12.678 9.989 13.837L9.999 13.971L10.003 14.118C10.031 14.6259 10.2515 15.1041 10.6196 15.4553C10.9877 15.8064 11.4757 16.004 11.9844 16.008C12.4931 16.0119 12.9842 15.8219 13.3577 15.4765C13.7313 15.1312 13.9591 14.6564 13.995 14.149L14.007 13.867C14.131 12.711 15.869 12.711 15.993 13.867L16.005 14.149C16.0408 14.6537 16.2665 15.1261 16.6367 15.471C17.0069 15.8159 17.494 16.0077 18 16.0077C18.506 16.0077 18.9931 15.8159 19.3633 15.471C19.7335 15.1261 19.9592 14.6537 19.995 14.149L20 14V13C20 12.7551 19.91 12.5187 19.7473 12.3356C19.5845 12.1526 19.3603 12.0357 19.117 12.007L19 12ZM7 1C8.32 1.871 8.663 3.088 8.449 3.888C8.3461 4.2723 8.09474 4.59998 7.75024 4.79895C7.40574 4.99793 6.9963 5.0519 6.612 4.949C6.2277 4.8461 5.90002 4.59474 5.70105 4.25024C5.50207 3.90574 5.4481 3.4963 5.551 3.112C5.85 2.002 7 2.5 7 1ZM12 1C13.32 1.871 13.663 3.088 13.449 3.888C13.3461 4.2723 13.0947 4.59998 12.7502 4.79895C12.4057 4.99793 11.9963 5.0519 11.612 4.949C11.2277 4.8461 10.9 4.59474 10.701 4.25024C10.5021 3.90574 10.4481 3.4963 10.551 3.112C10.85 2.002 12 2.5 12 1ZM17 1C18.32 1.871 18.663 3.088 18.449 3.888C18.3461 4.2723 18.0947 4.59998 17.7502 4.79895C17.4057 4.99793 16.9963 5.0519 16.612 4.949C16.2277 4.8461 15.9 4.59474 15.701 4.25024C15.5021 3.90574 15.4481 3.4963 15.551 3.112C15.85 2.002 17 2.5 17 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Location(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        d="M21.1772 6.03109C20.6729 4.86827 19.9458 3.81543 19.037 2.93199C18.1252 2.04056 17.0503 1.33304 15.8709 0.848058C14.6441 0.33913 13.3424 0.0819869 12.0004 0.0819869C10.6584 0.0819869 9.35664 0.33913 8.12985 0.84538C6.94325 1.33556 5.87985 2.03734 4.96378 2.92931C4.05554 3.81325 3.32855 4.86597 2.8236 6.02842C2.30128 7.23377 2.0361 8.51413 2.0361 9.83199C2.0361 11.7231 2.48878 13.6061 3.37807 15.4222C4.09325 16.882 5.09235 18.3043 6.35128 19.657C8.50217 21.9659 10.7575 23.3775 11.3977 23.7552C11.5794 23.8625 11.7867 23.919 11.9977 23.9186C12.2066 23.9186 12.4129 23.865 12.5977 23.7552C13.2379 23.3775 15.4932 21.9659 17.6441 19.657C18.9031 18.307 19.9022 16.882 20.6174 15.4222C21.512 13.6088 21.9647 11.7284 21.9647 9.83467C21.9647 8.51681 21.6995 7.23645 21.1772 6.03109ZM12.0004 21.8641C10.2352 20.7418 3.96467 16.2981 3.96467 9.83467C3.96467 7.74806 4.79771 5.78734 6.3111 4.30877C7.82985 2.82752 9.84949 2.01056 12.0004 2.01056C14.1513 2.01056 16.1709 2.82752 17.6897 4.31145C19.2031 5.78734 20.0361 7.74806 20.0361 9.83467C20.0361 16.2981 13.7656 20.7418 12.0004 21.8641ZM12.0004 5.33199C9.39682 5.33199 7.2861 7.4427 7.2861 10.0463C7.2861 12.6498 9.39682 14.7606 12.0004 14.7606C14.604 14.7606 16.7147 12.6498 16.7147 10.0463C16.7147 7.4427 14.604 5.33199 12.0004 5.33199ZM14.1218 12.1677C13.8436 12.4467 13.5129 12.668 13.1488 12.8188C12.7847 12.9696 12.3945 13.0469 12.0004 13.0463C11.1995 13.0463 10.4468 12.7329 9.87896 12.1677C9.59992 11.8895 9.37864 11.5588 9.22786 11.1947C9.07708 10.8306 8.99977 10.4403 9.00039 10.0463C9.00039 9.24538 9.31378 8.4927 9.87896 7.92484C10.4468 7.35699 11.1995 7.04627 12.0004 7.04627C12.8013 7.04627 13.554 7.35699 14.1218 7.92484C14.6897 8.4927 15.0004 9.24538 15.0004 10.0463C15.0004 10.8472 14.6897 11.5998 14.1218 12.1677Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Mail(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.295 6.7H4.70502L11.4644 10.2576C11.7997 10.434 12.2003 10.434 12.5356 10.2576L19.295 6.7ZM3.2 7.82896V17.3H20.8V7.82896L13.3274 11.7619C12.4965 12.1992 11.5035 12.1992 10.6726 11.7619L3.2 7.82896ZM1.5 6.7C1.5 5.76112 2.26112 5 3.2 5H20.8C21.7389 5 22.5 5.76112 22.5 6.7V17.3C22.5 18.2389 21.7389 19 20.8 19H3.2C2.26112 19 1.5 18.2389 1.5 17.3V6.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoubleCheck(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M4.67097 19.2887C4.62879 19.2887 4.58894 19.2863 4.54676 19.2793C4.25613 19.2395 4.00301 19.0684 3.85769 18.8152L0.124099 12.2832C-0.133713 11.8332 0.0233182 11.2613 0.473318 11.0035C0.923318 10.7457 1.49519 10.9027 1.75301 11.3527L4.87488 16.8184L16.3827 5.27539C16.7483 4.90977 17.3413 4.90742 17.7093 5.27305C18.0749 5.63867 18.0772 6.23164 17.7116 6.59961L5.37879 18.9699L5.33426 19.0145C5.15613 19.1926 4.91707 19.2887 4.67097 19.2887Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3813 5.38128C23.723 5.72299 23.723 6.27701 23.3813 6.61872L10.8813 19.1187C10.5396 19.4604 9.98555 19.4604 9.64384 19.1187C9.30214 18.777 9.30214 18.223 9.64384 17.8813L22.1438 5.38128C22.4856 5.03957 23.0396 5.03957 23.3813 5.38128Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WarningFilled(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M23.8841 21.7132L12.7419 2.42855C12.5759 2.14196 12.2893 2 12 2C11.7107 2 11.4215 2.14196 11.2581 2.42855L0.115851 21.7132C-0.213595 22.2864 0.198882 22.9988 0.857773 22.9988H23.1422C23.8011 22.9988 24.2136 22.2864 23.8841 21.7132ZM11.1429 9.92812C11.1429 9.81027 11.2393 9.71385 11.3572 9.71385H12.6428C12.7607 9.71385 12.8571 9.81027 12.8571 9.92812V14.8564C12.8571 14.9743 12.7607 15.0707 12.6428 15.0707H11.3572C11.2393 15.0707 11.1429 14.9743 11.1429 14.8564V9.92812ZM12 19.3562C11.6636 19.3493 11.3432 19.2108 11.1077 18.9705C10.8722 18.7301 10.7403 18.407 10.7403 18.0705C10.7403 17.734 10.8722 17.4109 11.1077 17.1706C11.3432 16.9302 11.6636 16.7917 12 16.7849C12.3364 16.7917 12.6568 16.9302 12.8923 17.1706C13.1278 17.4109 13.2597 17.734 13.2597 18.0705C13.2597 18.407 13.1278 18.7301 12.8923 18.9705C12.6568 19.2108 12.3364 19.3493 12 19.3562Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CompleteArrowDown(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M9.074 1.699v13.446c0 .002.005.004.005.002l4.875-5.072a1.03 1.03 0 111.486 1.43l-6.638 6.907a1.032 1.032 0 01-1.486 0L.644 11.467a1.027 1.027 0 01.028-1.457 1.032 1.032 0 011.458.028l4.875 5.072c.002.002.004 0 .004-.003V1.675c0-.548.43-.996.968-1.029.6-.035 1.097.455 1.097 1.053z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CompleteArrowUp(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M7.01 17.674V4.228c0-.002-.005-.005-.005-.002L2.13 9.298a1.03 1.03 0 11-1.486-1.43L7.281.961a1.032 1.032 0 011.486 0l6.673 6.944a1.027 1.027 0 01-.028 1.458 1.032 1.032 0 01-1.458-.028L9.08 4.263c-.002-.002-.005 0-.005.003v13.432c0 .548-.428.996-.968 1.029a1.047 1.047 0 01-1.096-1.053z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowBothWays(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M6.974 8.719h13.447c.002 0 .004.004.002.004l-5.072 4.875a1.03 1.03 0 101.43 1.486l6.906-6.637a1.032 1.032 0 000-1.486L16.743.288a1.027 1.027 0 00-1.458.028 1.032 1.032 0 00.028 1.458l5.072 4.875c.002.003 0 .005-.002.005H3.62c-.002 0-.004-.002-.002-.005L8.69 1.774A1.032 1.032 0 007.26.288L.317 6.961a1.032 1.032 0 000 1.486l6.907 6.637a1.03 1.03 0 101.43-1.486L3.58 8.723c-.002 0 0-.004.003-.004H6.974z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TalkBubble(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M12 0c1.612 0 3.178.295 4.652.874a12.031 12.031 0 013.81 2.395 11.16 11.16 0 012.585 3.572c.63 1.392.952 2.87.95 4.396a10.54 10.54 0 01-.952 4.394 11.206 11.206 0 01-2.585 3.572 12.031 12.031 0 01-3.81 2.395c-1.475.579-3.04.874-4.652.874-1.282 0-2.54-.187-3.745-.558L4.777 23.89a.839.839 0 01-.797.019.839.839 0 01-.457-.654l-.54-4.608C1.057 16.594 0 13.974 0 11.235c0-1.523.321-3.002.952-4.394C1.562 5.5 2.43 4.3 3.538 3.269A12.031 12.031 0 017.348.874 12.675 12.675 0 0112 0zm0 1.687c-1.4 0-2.756.256-4.03.757a10.38 10.38 0 00-3.282 2.06A9.507 9.507 0 002.49 7.54a8.877 8.877 0 00-.801 3.696c0 2.388.958 4.675 2.697 6.437a.84.84 0 01.237.495l.426 3.625 2.693-1.53a.844.844 0 01.689-.066c1.139.39 2.341.586 3.567.586 1.399 0 2.756-.253 4.033-.757a10.38 10.38 0 003.28-2.06 9.507 9.507 0 002.199-3.034 8.916 8.916 0 00.002-7.392 9.517 9.517 0 00-2.198-3.035 10.339 10.339 0 00-3.28-2.06A10.988 10.988 0 0012 1.687zM6.844 9.96a1.288 1.288 0 11.002 2.576 1.288 1.288 0 01-.002-2.576zm10.312 0a1.29 1.29 0 11-.002 2.58 1.29 1.29 0 01.002-2.58zM12 9.96a1.29 1.29 0 11-.002 2.58A1.29 1.29 0 0112 9.96z"
          fillOpacity={0.85}
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function Locked(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="curentColor"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.611 3.954a8.433 8.433 0 011.704 2.658 8.565 8.565 0 01.621 3.248v.846l-.005.448v9.727c.005.9-.691 1.63-1.549 1.63H5.611c-.858 0-1.554-.73-1.554-1.63V9.86c0-1.13.211-2.223.626-3.25a8.4 8.4 0 011.704-2.657 7.886 7.886 0 012.522-1.8 7.53 7.53 0 016.18-.002 7.903 7.903 0 012.522 1.802zm-8.074-.326h-.005c-.736.33-1.4.811-1.983 1.425a6.808 6.808 0 00-1.38 2.154 7.074 7.074 0 00-.511 2.65v.697h12.68V9.86c0-.923-.172-1.814-.511-2.653a6.84 6.84 0 00-1.38-2.156 6.457 6.457 0 00-2.016-1.44 5.972 5.972 0 00-2.433-.52c-.846 0-1.664.176-2.43.525l-.031.012zm8.808 8.522v8.728a.106.106 0 01-.005.033H5.663a.108.108 0 01-.005-.033V12.15h12.687zm-7.085 5.698V15.75a1.39 1.39 0 01-.636-1.158 1.376 1.376 0 012.752 0c0 .474-.237.9-.63 1.153v2.103a.743.743 0 01-1.487 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Unlocked(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.658 10.552v-.697c0-.914.17-1.804.51-2.65A6.808 6.808 0 017.55 5.05a6.333 6.333 0 011.983-1.425h.005l.03-.012a5.821 5.821 0 012.43-.525c.842 0 1.662.178 2.434.52a6.457 6.457 0 012.015 1.44c.41.433.947 1.382 1.245 1.947a.838.838 0 00.743.448h.32a.602.602 0 00.558-.832c-.405-1.001-.98-1.896-1.703-2.658a7.903 7.903 0 00-2.522-1.802 7.53 7.53 0 00-6.18.002 7.886 7.886 0 00-2.523 1.8A8.4 8.4 0 004.68 6.612a8.626 8.626 0 00-.625 3.248v11.02c0 .9.696 1.632 1.554 1.632h12.77c.858 0 1.555-.732 1.55-1.631l.005-8.827c0-.83-.67-1.5-1.5-1.5H5.658v-.002zm12.686 10.326a.106.106 0 01-.004.033H5.662a.108.108 0 01-.004-.033V12.15h12.686v8.728zm-7.085-3.03V15.75a1.39 1.39 0 01-.635-1.158 1.376 1.376 0 012.752 0c0 .474-.237.9-.63 1.153v2.103a.743.743 0 01-1.487 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Markdown(props: BaseProps): JSX.Element {
  const className = cx(props.className, 'fill-current');
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        d="M2.816 19l1.316-3.707h5.293L10.742 19h1.662L7.597 5.91H5.96L1.154 19h1.662zm1.815-5.114L6.727 7.98h.103l2.096 5.906H4.631zm12.496 5.344c1.713 0 2.608-.92 2.915-1.56h.077V19h1.508v-6.469c0-3.12-2.377-3.477-3.63-3.477-1.483 0-3.17.511-3.938 2.301l1.432.511c.332-.715 1.119-1.482 2.557-1.482 1.387 0 2.07.735 2.07 1.994v.051c0 .729-.74.665-2.53.895-1.822.236-3.81.64-3.81 2.89 0 1.917 1.483 3.016 3.35 3.016zm.23-1.355c-1.201 0-2.07-.537-2.07-1.585 0-1.15 1.048-1.509 2.224-1.662.639-.077 2.352-.256 2.608-.563v1.381c0 1.227-.972 2.429-2.762 2.429z"
        fill="currentColor"
      />
    </svg>
  );
}
