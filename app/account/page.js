import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

const Page = async () => {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <div className="w-full px-4">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welsome, {firstName}
      </h2>
      Account
    </div>
  );
};

export default Page;
