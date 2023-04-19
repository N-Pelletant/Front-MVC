class MyController {
  _state = {};
  stateChangedHandlers = new Set();

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
    this.raiseStateChanged();
  }

  subscribeStateChanged = (handler) => {
    this.stateChangedHandlers.add(handler);
  };

  unsubscribeStateChanged = (handler) => {
    this.stateChangedHandlers.delete(handler);
  };

  raiseStateChanged = () => {
    Array.from(this.stateChangedHandlers).forEach((handler) =>
      handler(this.state)
    );
  };

  setNom = (nom) => {
    this.state = {
      ...this.state,
      nom,
    };

    setTimeout(() => {
      this.state = {
        ...this.state,
        nom: "",
      };
    }, 3000);
  };

  setAge = (age) => {
    this.state = {
      ...this.state,
      age,
    };
  };
}

export default MyController;
