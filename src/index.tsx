import * as React from 'react';
import cx from 'clsx';

type BaseProps = {
  className?: string | { [className: string]: boolean };
};

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