class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="Sandile" />
      </div>
    );
  }
};

class Camper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
};
// change code below this line
Camper.defaultProps = {name: "CamperBot"};

Camper.propTypes = {name: PropTypes.string.isRequired};
