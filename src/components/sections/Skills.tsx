import SectionTitle from "../common/SectionTitle";

const skills = [
  "Analog Circuit Design",
  "Mixed-Signal Electronics",
  "PCB Design",
  "Embedded Systems",
  "Biomedical Instrumentation",
  "Signal Processing",
  "Python",
  "C / C++",
  "MATLAB",
  "Verilog",
  "Altium Designer",
  "LTspice",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />

      <div className="skill-list">
        {skills.map((skill, index) => (
          <span
            className={`skill-badge reveal reveal-scale stagger-${(index % 6) + 1}`}
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
