import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 20,
    fontFamily: "Helvetica",
    color: "#2C3E50",
    fontSize: 11,
  },

  /* Header */
  headerWrap: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#2C3E50",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // supported in react-pdf newer versions; if not, use margin styles
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#2C3E50",
    objectFit: "cover",
  },
  nameBlock: {
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 600,
  },

  headerRight: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },
  contactItem: {
    fontSize: 10.5,
    marginBottom: 2,
  },

  /* Main Grid */
  grid: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },

  leftCol: {
    width: "33%", // ~1fr of 1:2 layout on A4 width
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#2C3E50",
  },
  rightCol: {
    width: "67%",
    paddingLeft: 12,
  },

  /* Education */
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eduList: {
    paddingLeft: 6,
  },
  eduItem: {
    marginBottom: 8,
  },
  eduSubjectRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  subjectText: {
    fontSize: 11,
    fontWeight: 500,
  },
  courseText: {
    fontSize: 11,
  },
  schoolRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: "bold",
  },
  schoolDate: {
    fontSize: 11,
    fontWeight: 600,
  },

  /* Work / Right column */
  workList: {
    flexDirection: "column",
  },
  workItemWrap: {
    flexDirection: "row",
    marginBottom: 14,
  },
  markerCol: {
    width: 20,
    alignItems: "flex-start",
    paddingTop: 2,
  },
  markerText: {
    fontWeight: "bold",
    fontSize: 11,
  },
  workContent: {
    flex: 1,
    paddingLeft: 6,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  companyName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  dates: {
    fontSize: 10.5,
    fontWeight: 500,
  },
  position: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 6,
  },
  descList: {
    paddingLeft: 6,
    marginTop: 2,
  },
  descItem: {
    fontSize: 10.5,
    marginBottom: 4,
    display: "flex",
    flexDirection: "row",
  },
  descBullet: {
    width: 10,
    fontSize: 10.5,
  },
  descText: {
    flex: 1,
    fontSize: 10.5,
  },

  /* Footer spacing if needed */
  spacer: {
    marginTop: 6,
  },
});

const ResumePDF = ({ info = {}, education = [], work = [] }) => {
  const { name, email, jobTitle, tel, img, location, portfolio } = info;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerWrap}>
          <View style={styles.headerLeft}>
            {img && <Image src={img} style={styles.avatar} />}
            <View style={styles.nameBlock}>
              <Text style={styles.name}>{name || ""}</Text>
              {jobTitle ? (
                <Text style={styles.jobTitle}>{jobTitle}</Text>
              ) : null}
            </View>
          </View>

          <View style={styles.headerRight}>
            {email ? <Text style={styles.contactItem}>{email}</Text> : null}
            {tel ? <Text style={styles.contactItem}>{tel}</Text> : null}
            {location ? (
              <Text style={styles.contactItem}>{location}</Text>
            ) : null}
            {portfolio ? (
              <Text style={styles.contactItem}>{portfolio}</Text>
            ) : null}
          </View>
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {/* Left: Education / Skills */}
          <View style={styles.leftCol}>
            <Text style={styles.sectionTitle}>Education / Skills</Text>
            <View style={styles.eduList}>
              {Array.isArray(education) && education.length > 0 ? (
                education.map((edu, i) => (
                  <View key={i} style={styles.eduItem}>
                    <View style={styles.eduSubjectRow}>
                      <Text style={styles.subjectText}>
                        {edu.subject || ""}
                      </Text>
                      {edu.course ? (
                        <Text style={styles.courseText}>({edu.course})</Text>
                      ) : null}
                    </View>
                    <View style={styles.schoolRow}>
                      <Text style={styles.schoolName}>{edu.school || ""}</Text>
                      {edu.startDate ? (
                        <Text style={styles.schoolDate}>
                          {" "}
                          - {edu.startDate}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                ))
              ) : (
                <Text style={styles.text}>No education data</Text>
              )}
            </View>
          </View>

          {/* Right: Work */}
          <View style={styles.rightCol}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            <View style={styles.workList}>
              {Array.isArray(work) && work.length > 0 ? (
                work.map((job, idx) => (
                  <View key={idx} style={styles.workItemWrap}>
                    {/* Marker Column */}
                    <View style={styles.markerCol}>
                      <Text style={styles.markerText}>{idx + 1}.</Text>
                    </View>

                    {/* Content */}
                    <View style={styles.workContent}>
                      <View style={styles.companyRow}>
                        <Text style={styles.companyName}>
                          {job.company || ""}
                        </Text>
                        <Text style={styles.dates}>
                          {job.from ? job.from : ""}{" "}
                          {job.from || job.till ? "-" : ""}{" "}
                          {job.till ? job.till : "Present"}
                        </Text>
                      </View>

                      <Text style={styles.position}>{job.position || ""}</Text>

                      {job.description ? (
                        <View style={styles.descList}>
                          {job.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((line, i) => (
                              <View key={i} style={styles.descItem}>
                                <Text style={styles.descBullet}>•</Text>
                                <Text style={styles.descText}>
                                  {line.trim()}
                                </Text>
                              </View>
                            ))}
                        </View>
                      ) : null}
                    </View>
                  </View>
                ))
              ) : (
                <Text style={styles.text}>No work data</Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.spacer} />
      </Page>
    </Document>
  );
};

export default ResumePDF;
