import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { ResponsiveTable } from '@seasonedsoftware/responsive-table'

const data = [
  {
    Foo: 'Bar',
    Fizz: <span style={{ color: 'red' }}>Buzz</span>,
    Hello: {
      content: 'World',
      style: { color: 'red' },
    },
  },
  {
    Foo: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    Fizz: 'Fizz',
    Hello: 'Hello',
  },
  {
    Foo: {
      content: 'Hakuna matata!',
      className: 'special-one',
      align: 'right',
    },
    Fizz: null,
    Hello: {
      content: <strong>Bar foo</strong>,
      align: 'left',
    },
  },
]

const Example = () => (
  <React.Fragment>
    <Card elevation={5}>
      <CardHeader title="Scrollable" />
      <CardContent>
        <p>
          The <em>scrollable</em> prop will make both tables (desktop and
          mobile) scroll when the width of the container is not enough for the
          table content.
        </p>
        <p>
          The <em>tableProps</em> will only affect the <em>desktop version</em>.
          You can pass any prop that is acceptable by{' '}
          <a
            href="https://material-ui.com/api/table/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Table
          </a>{' '}
          component.
        </p>
        <ResponsiveTable
          scrollable
          data={data}
          tableProps={{ style: { minWidth: 800 } }}
        />
      </CardContent>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`
import { ResponsiveTable } from '@seasonedsoftware/responsive-table'

// MyComponent
<ResponsiveTable
  scrollable
  data={data} // see last sample
  tableProps={{ style: { minWidth: 800 } }}
/>`}
      </SyntaxHighlighter>
    </Card>
    <Card elevation={5}>
      <CardHeader title="Change mobile Props" />
      <CardContent>
        <p>
          The <em>mobileTableProps</em> and <em>cardProps</em> are only used on
          the mobile version of the table. You can pass any prop that is
          acceptable by{' '}
          <a
            href="https://material-ui.com/api/table/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Table
          </a>{' '}
          and{' '}
          <a
            href="https://material-ui.com/api/card/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Card
          </a>{' '}
          respectively.
        </p>
        <ResponsiveTable
          data={data}
          mobileTableProps={{ size: 'small' }}
          cardProps={{ elevation: 10 }}
        />
      </CardContent>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`
import { ResponsiveTable } from '@seasonedsoftware/responsive-table'

// MyComponent
<ResponsiveTable
  data={data} // see last sample
  mobileTableProps={{ size: 'small' }}
  cardProps={{ elevation: 10 }}
/>`}
      </SyntaxHighlighter>
    </Card>
    <Card elevation={5}>
      <CardHeader title="Change the breakpoint" />
      <CardContent>
        <p>
          You can pass a <em>mediaQuery</em> prop with a media query string. If
          it matches, then the table is shown.
        </p>
        <ResponsiveTable data={data} mediaQuery="(min-width:890px)" />
      </CardContent>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`
import { ResponsiveTable } from '@seasonedsoftware/responsive-table'

// MyComponent
<ResponsiveTable
  data={data} // see last sample
  mediaQuery="(min-width:890px)" // default: (min-width:600px)
/>`}
      </SyntaxHighlighter>
    </Card>
    <Card elevation={5}>
      <CardHeader title="The Data for these samples" />
      <CardContent>
        <p>
          The <em>data</em> prop should be an array with objects. The object
          keys of the first array should be what you want as the table header.
        </p>
        <p>
          For the values, you can pass either a string, a react element, or
          another object which should have a content key. Any other key will be
          passed to the TableCell as props.
        </p>
        <p>
          <em>Null</em> values will be hidden in the mobile version.
        </p>
      </CardContent>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`
const data = [
  {
    Foo: 'Bar',
    Fizz: <span style={{ color: 'red' }}>Buzz</span>,
    Hello: {
      content: 'World',
      style: { color: 'red' },
    },
  },
  {
    Foo: \`Lorem Ipsum is simply dummy text of
    the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s\`,
    Fizz: 'Fizz',
    Hello: 'Hello',
  },
  {
    Foo: {
      content: 'Hakuna matata!',
      className: 'special-one',
      align: 'right',
    },
    Fizz: null,
    Hello: {
      content: <strong>Bar foo</strong>,
      align: 'left',
    },
  },
]`}
      </SyntaxHighlighter>
    </Card>
  </React.Fragment>
)

export default Example
