import less from 'dahlia-less'
import antd from 'dahlia-antd'

export default {
  plugins: [
    less({
      modifyVars: {
        'primary-color': 'red',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd(),
  ],
}