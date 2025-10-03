import React from "react";

function Map() {
  const courses = [
    {
      name: "Manojkumar",
      dept: "CSE",
      batch: 2025,
    },
    {
      name: "Manojkumar",
      dept: "CSE",
      batch: 2025,
    },
    {
      name: "Manojkumar",
      dept: "CSE",
      batch: 2025,
    },
    {
      name: "Manojkumar",
      dept: "CSE",
      batch: 2025,
    },
  ];

  const courseList = courses.map((course, index) => (
    <div key={index}>
      {course.name} - {course.dept} - {course.batch}
    </div>
  ));

  return (
    <div>
      {courseList}
    </div>
  );
}

export default Map;
