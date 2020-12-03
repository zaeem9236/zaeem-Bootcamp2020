import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerButton from "./TimerButton"

describe("Timer Button", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(
  <TimerButton 
    ButtonAction={jest.fn()}
    ButtonValue=""
  />
  )))

  it("Testing that TimerButton.tsx have a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  }) // test to check that TimerButton.tsx must have one div
})


