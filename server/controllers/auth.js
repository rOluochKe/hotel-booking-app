export const showMessage = (req, res) => {
  res.status(200).send(`Here is your message:  ${req.params.message}`);
};
