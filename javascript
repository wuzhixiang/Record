1.replace
  //js的replace函数一般只会替换一个
  //但是第一个参数可以是正则表达式，g表示全文匹配
  var reg = new RegExp("need_to_replace", "g")
  m = m.replace(reg, 'need_to_show')
  //即可
  

2.設置環境變量
  import os
  os.environ['TOOLDIR'] = '/dirname/a/b/c/tools'
  TOOLDIR = os.getenv('TOOLDIR')
  os.environ['PATH'] = TOOLDIR + '/a/bin' + :' \
                        + TOOLDIR + '/b/bin' + :' \
                        + TOOLDIR + '/c/bin' + :' \
                        + TOOLDIR + '/d/bin' + :' \
                        + TOOLDIR + '/e/bin' + :' \
                        + TOOLDIR + '/f/bin' + :' \
                        + os.environ['PATH']
          
          
