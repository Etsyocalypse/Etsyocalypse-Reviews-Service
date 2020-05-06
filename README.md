# Etsypocalypse - Reviews Component

Etsyocalypse is a clone of the Etsy product page with a fun, unique twist by introducing a post-apocalyptic theme. Our team of 5 engineers separated the page into components and individually built microservices for each component.  Once the individual components were complete we linked them together into a fully functioning application using a reverse proxy server.  I was responsible for the reviews component which is detailed below.



# ComponentDemo: Reviews
![](https://thumbs.gfycat.com/DamagedSpottedDrongo-size_restricted.gif)

# Table of Contents
- [Functionality](#functionality)
- [Workflow](#workflow)
- [Challenges](#challenges)
- [Tech Stack](#tech-stack)

# Functionality
The reviews component by default renders item reviews based on an item ID that is passed from the Search component when a user searches for an item.  However, the component also has the capability to respond to user input by conditionally rendering either item reviews or shop reviews based on the tab selected by the user.  Additionally, if the number of reviews exceeds a certain number, the remaining reviews are hidden until the user clicks on the See More Reviews button.

# Workflow
As a group, we whiteboarded the design of the page, divided it into main components, and assigned each team member one or two components depending on the projected level of effort.  We kept track of our progress using Trello and managed our codebase using GitHub.  

# Challenges
I decided to use CSS rather than Bootstrap to style my component to get some additional CSS practice.  Some aspects of this, such as replicating animations, were challenging but I was able to overcome these challenges by conducting research, documenting my findings, and through some trial and error.  Some additional challenges arose when it came time to deploy our microservices through the reverse proxy.  We found that there were some CSS conflicts that needed to be resolved, and had to keep close communication to fix a few minor bugs.

# Tech Stack
<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">Deployment & Testing</td>
    <td align="center">HTTP Client</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"></td>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"></td>
    <td align="center"><img src="https://seeklogo.net/wp-content/uploads/2015/09/amazon-web-services-logo.png" alt="AWS" title="AWS" width="60px"></td>
    <td align="center"><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="75px" height="20px"></td>
    <td align="center"><img src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/vertical-logo-monochromatic.png?itok=erja9lKc" alt="Docker" title="Docker" width="50px" height="45px"></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><img src="https://www.logolynx.com/images/logolynx/f4/f436442c17fa509c78e28aa28c76b923.png" alt="MongoDB" title="MongoDB" width="60px"/></td>
  </tr>
</table>
