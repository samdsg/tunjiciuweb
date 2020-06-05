const mainCourse = ({ id, course, extratime, duration: { name, mins } }) => {
  return `
        <form>
        <div class="exam-grid">
            <div class="g-name">
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="exampleRadios-${id}"
                    value="option-${id}"
                    />
                    <label class="form-check-label" for="exampleRadios-${id}">
                    ${course}
                    </label>
            </div>
        </div>
          <div class="g-time">
              <fieldset>
                <div class="form-group">
                    ${extratime.map(({ id, time }) => {
                      return `<div class="custom-control custom-radio">
                                <input
                                    type="radio"
                                    id="customRadio-${id}"
                                    class="custom-control-input"
                                    name="time-${id}"
                                />
                                <label class="custom-control-label" for="customRadio-${id}">${time}</label>
                        </div>`;
                    })}                  
                </div>
              </fieldset>
          </div>
          <div class="g-duration">
              <fieldset>
                <div class="form-group">
                  <select class="custom-select">
                    <option selected="">${name}</option>
                    ${mins.map(({ time }) => {
                      return `<option value=${time}>${time}</option>`;
                    })}
                  </select>
                </div>
              </fieldset>
          </div>
        </div>`;
};

const examPeriods = [
  {
    id: 1,
    course: "Internet Programming",
    extratime: [
      { id: 1, time: "8:30" },
      { id: 2, time: "12:00" },
      { id: 3, time: "14:00" },
    ],
    duration: {
      name: "Duration (mins)",
      mins: [
        { id: 1, time: 30 },
        { id: 2, time: 45 },
        { id: 3, time: 60 },
        { id: 4, time: 90 },
      ],
    },
  },
  {
    id: 2,
    course: "Introduction to programming",
    extratime: [
      { id: 4, time: "8:30" },
      { id: 5, time: "12:00" },
      { id: 6, time: "14:00" },
    ],
    duration: {
      name: "Duration (mins)",
      mins: [
        { id: 1, time: 30 },
        { id: 2, time: 45 },
        { id: 3, time: 60 },
        { id: 4, time: 90 },
      ],
    },
  },
  {
    id: 3,
    course: "Calculus 1",
    extratime: [
      { id: 7, time: "8:30" },
      { id: 8, time: "12:00" },
      { id: 9, time: "14:00" },
    ],
    duration: {
      name: "Duration (mins)",
      mins: [
        { id: 1, time: 30 },
        { id: 2, time: 45 },
        { id: 3, time: 60 },
        { id: 4, time: 90 },
      ],
    },
  },
  {
    id: 4,
    course: "Linear Algebra",
    extratime: [
      { id: 10, time: "8:30" },
      { id: 11, time: "12:00" },
      { id: 12, time: "14:00" },
    ],
    duration: {
      name: "Duration (mins)",
      mins: [
        { id: 1, time: 30 },
        { id: 2, time: 45 },
        { id: 3, time: 60 },
        { id: 4, time: 90 },
      ],
    },
  },
];

const courseContainer = document.querySelector(".course-container");
courseContainer.innerHTML = examPeriods
  .map(({ id, course, extratime, duration }) =>
    mainCourse({ id, course, extratime, duration })
  )
  .join("");
