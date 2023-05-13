type ProfileProps = {
  img: string;
};

export const Profile = (props: ProfileProps) => {
  const { img } = props;
  return (
    <div className="profile">
      <img src={img} alt="" />
    </div>
  );
};
