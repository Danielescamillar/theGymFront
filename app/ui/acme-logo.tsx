import { anton } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${anton.className} flex flex-row items-center leading-none text-black`}
    >
      <p className="text-[50px]">TheGym</p>
    </div>
  );
}
