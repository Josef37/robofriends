import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import * as actions from "./actions";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("should create an action to search robots", () => {
  const text = "foo";
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("handles requesting robots api", () => {
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", {
      body: [{ foo: "bar" }],
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: [{ foo: "bar" }] }
    ];
    const store = mockStore();

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles requesting robots api failing", () => {
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", {
      throws: "failed to fetch"
    });

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_FAILED, payload: "failed to fetch" }
    ];
    const store = mockStore();

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
