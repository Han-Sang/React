export default function Profile({email, img}) {
  return (
    <div>Profile
        <p>{email}</p>
        <img src={img} alt="" />
    </div>

  )
}