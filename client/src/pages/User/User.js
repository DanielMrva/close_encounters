import "./User.css";

export default function User() {
  return (
    <div className="user-container user-grid">
      <div className="flex-center scenario-into">
        <h4>
          TOMORROW YOU MAY WAKE UP IN A LOCATION WITH NO IDEA HOW YOU GOT THERE
        </h4>
      </div>
      <div>{/* <img src={homeImage} alt="Curvy Shelf" /> */}</div>
      <div className="flex-center time">
        <h3>SITUATION: UNACCOUNTED FOR LOSS OF TIME</h3>
      </div>
      <div className="flex-center question-title">
        <div>DO YOU</div>
      </div>
      <div className="user-option-one">
        Wander home and pretend it never happened
      </div>
      <div className="user-option-two">
        Find a hypnotist to help you unlock the memories
      </div>
    </div>
  );
}
