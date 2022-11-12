
/* Add the Profile function here */
function Profile(props){
    if (props.name && props.bio){
      return <main id="content" role="main" className="base">
      <h1>{props.name}'s React Page</h1>
        <p>{props.bio}</p>
      </main>
    } else {
      return <main id="content" role="main" className="base">
        <h1>Nobody's React Page</h1> {/* <h1>Just a React Page</h1> */}
        <p>Nobody lives here.</p> {/* <p>Nothing to see here!</p> */}
      </main>
    }
}
export default Profile