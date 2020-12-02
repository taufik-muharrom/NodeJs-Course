const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment Section One</title></head>");
    res.write(
      '<body><h2>Enter new user</h2><br><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    return req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        console.log(message);
        return res.end();
      });
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Table User</title></head>");
    res.write("<body><ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
};

exports.handler = requestHandler;
