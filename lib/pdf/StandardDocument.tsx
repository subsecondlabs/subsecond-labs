import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { PDF_CONTENT } from './content'

const ACCENT = '#00FF00'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0A0A0A',
    color: '#E5E5E5',
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 48,
  },
  header: {
    position: 'absolute',
    top: 24,
    left: 48,
    right: 48,
    fontSize: 9,
    letterSpacing: 2,
    color: '#555',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 48,
    right: 48,
    fontSize: 9,
    color: '#555',
    textAlign: 'right',
  },
  titleBlock: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    color: ACCENT,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#B5B5B5',
    marginTop: 8,
  },
  meta: {
    marginTop: 10,
    fontSize: 10,
    color: '#8A8A8A',
  },
  section: {
    marginBottom: 18,
  },
  heading: {
    fontSize: 14,
    color: ACCENT,
    marginBottom: 8,
    letterSpacing: 0.6,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.45,
  },
  highlightBox: {
    backgroundColor: '#111',
    borderLeftWidth: 4,
    borderLeftColor: ACCENT,
    padding: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  highlightTitle: {
    fontSize: 11,
    color: ACCENT,
    marginBottom: 6,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  metricCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#1E1E1E',
    padding: 10,
    marginBottom: 10,
    marginRight: '4%',
  },
  metricCardRight: {
    marginRight: 0,
  },
  metricName: {
    fontSize: 11,
    color: ACCENT,
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 9,
    color: '#777',
    marginBottom: 2,
  },
  checklistItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    backgroundColor: ACCENT,
    marginTop: 5,
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.4,
  },
})

export default function StandardDocument() {
  const { metadata, sections } = PDF_CONTENT

  return (
    <Document title={metadata.title}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header} fixed>
          SUBSECOND LABS // INTERNAL AUDIT
        </Text>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>{metadata.title}</Text>
          <Text style={styles.subtitle}>{metadata.subtitle}</Text>
          <Text style={styles.meta}>{metadata.version}</Text>
          <Text style={styles.meta}>{metadata.author}</Text>
          <Text style={styles.meta}>{metadata.objective}</Text>
          <Text style={styles.meta}>{metadata.website}</Text>
        </View>

        {sections.map((section, index) => (
          <View key={section.id} style={styles.section}>
            {index > 0 && <View break />}
            <Text style={styles.heading}>{section.heading}</Text>

            {section.intro && <Text style={styles.paragraph}>{section.intro}</Text>}
            {section.body?.map((paragraph) => (
              <Text key={paragraph} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))}

            {section.highlightBox && (
              <View style={styles.highlightBox}>
                <Text style={styles.highlightTitle}>{section.highlightBox.title}</Text>
                {section.highlightBox.points.map((point) => (
                  <View key={point} style={styles.checklistItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.bulletText}>{point}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.metrics && (
              <View style={styles.metricsGrid}>
                {section.metrics.map((metric, metricIndex) => (
                  <View
                    key={metric.name}
                    style={[
                      styles.metricCard,
                      metricIndex % 2 === 1 ? styles.metricCardRight : null,
                    ]}
                  >
                    <Text style={styles.metricName}>{metric.name}</Text>
                    <Text style={styles.metricLabel}>Definition</Text>
                    <Text style={styles.paragraph}>{metric.definition}</Text>
                    <Text style={styles.metricLabel}>Standard</Text>
                    <Text style={styles.paragraph}>{metric.standard}</Text>
                    <Text style={styles.metricLabel}>Risk</Text>
                    <Text style={styles.paragraph}>{metric.risk}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.checklist && (
              <View>
                {section.checklist.map((item) => (
                  <View key={item} style={styles.checklistItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.bulletText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.bullets && (
              <View>
                {section.bullets.map((item) => (
                  <View key={item} style={styles.checklistItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.bulletText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.closing && (
              <Text style={[styles.paragraph, { marginTop: 10 }]}>
                {section.closing}
              </Text>
            )}
          </View>
        ))}

        <Text
          style={styles.footer}
          fixed
          render={({ pageNumber }) => `CONFIDENTIAL // PAGE ${pageNumber}`}
        />
      </Page>
    </Document>
  )
}
