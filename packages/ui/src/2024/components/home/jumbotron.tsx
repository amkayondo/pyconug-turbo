import {
  CONFERENCE_DATE,
  PYCONUGANDA_MERCH_2024,
  VENUE,
} from"../../utils/constants";
import Link from "next/link";
import { QUICKET_LINK } from "../../utils/constants";

export default function Jumbotron() {
  return (
    <div className="grid place-items-center place-content-center">
      <div className=" max-w-2xl lg:pl-20 flex flex-col space-y-8 md:mt-32 mt-24 text-center md:text-start md:pt-0 px-4  md:pr-24 lg:pr-0">
        <h1 className="font-bold lg:text-4xl md:text-5xl text-4xl ">
          {" "}
          WE&#39;RE BACK
        </h1>
        <h1 className="font-bold lg:text-[90px] md:text-5xl text-4xl ">
          <span className="text-pyconug-red">PyCon</span> Uganda 2024
        </h1>
        <div className="flex space-x-4">
          <div>
            <span className="font-semibold">Date</span>
            <p className="text-gray-500 md:text-xl text-lg">
              {CONFERENCE_DATE}
            </p>
          </div>
          <div>
            <span className="font-semibold">Venue</span>
            <p className="text-gray-500 md:text-xl text-lg">{VENUE}</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start md:space-x-4 flex-col md:flex-row items-center space-y-3 md:space-y-0">
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue p-4 rounded-md w-56 font-bold flex items-center justify-center"
            target="_blank"
            href={QUICKET_LINK}
          >
            Buy Tickets
          </Link>
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue p-4 rounded-md w-56 font-bold flex items-center justify-center"
            target="_blank"
            href={PYCONUGANDA_MERCH_2024}
          >
            Buy Merch
          </Link>
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue p-4 rounded-md w-56 font-bold flex items-center justify-center"
            target="_blank"
            href="/2024/sponsors/why-sponsor"
          >
            Sponsor us
          </Link>
        </div>
      </div>
    </div>
  );
}
