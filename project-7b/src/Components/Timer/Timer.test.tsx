import React from "react"
import { mount, shallow, ShallowWrapper } from "enzyme"
import Timer from "./Timer";
import TimerButton from '../TimerButton/TimerButton';
import { getByTestId,render } from "@testing-library/react"

describe("Timer", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<Timer />)))

  it("Testing that Timer.tsx have a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  }) // test to check that Timer.tsx must have one div

  it("Testing that there are three timer buttons", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })


})


