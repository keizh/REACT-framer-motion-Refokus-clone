/* eslint-disable react/prop-types */
function Stripe({ url, number }) {
  return (
    <div className="STRIPE py-[25px]  px-[40px] w-[16.66%] flex justify-between text-zinc-200 overflow-x-hidden shrink-0 border-[1px] border-zinc-700">
      <img src={url} alt="" className="" />
      <p className="text-xl text-zinc-100">{number}</p>
    </div>
  );
}

export default Stripe;
