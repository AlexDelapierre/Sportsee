import { useUser } from "~/context/UserContext";

export function ProfileSummary() {
  const user = useUser();

  return (
    <div className="flex items-center gap-[38px]">
      <img
        src={user.profilePicture}
        alt={`Photo de ${user.firstName}`}
        className="h-[117px] w-[104px] rounded-[10px] object-cover"
      />
      <div>
        <h1 className="text-[22px] font-medium">
          {user.firstName} {user.lastName}
        </h1>
        <p className="mt-1 text-sm text-grey">
          Membre depuis le {user.memberSince}
        </p>
      </div>
    </div>
  );
}