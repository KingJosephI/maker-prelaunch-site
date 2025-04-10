export const Footer = () => {
  return (
    <footer className="px-6 md:px-24 lg:px-[10.3125rem] flex flex-col items-center pt-36 pb-40">
      <h2 className="text-2xl lg:text-[2rem] pb-7.5">
        Get notified when we launch
      </h2>
      <form className="flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Email address"
          className="bg-feature-blue w-80 rounded-4xl p-4.5 px-6.5"
        />
        <button className="cursor-pointer hover:bg-backcolor hover:text-white hover:border-[#3EE9E5] border-2 bg-[#3EE9E5] border-[#3EE9E5] text-[#093F68] font-extrabold rounded-4xl p-4.5 px-6.5">
          Get notified
        </button>
      </form>
    </footer>
  );
}

