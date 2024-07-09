// routes/entry.ts
import express from 'express';
import authenticateUser from '../middleware/auth';
import Entry from '../models/Entry';

const router = express.Router();

// Add Entry
router.post('/', authenticateUser, async (req, res) => {
  const { title, content, category, date } = req.body;
  const entry = await Entry.create({ title, content, category, date, user_id: req.user.id });
  res.json(entry);
});

// Get Entries
router.get('/', authenticateUser, async (req, res) => {
  const entries = await Entry.findAll({ where: { user_id: req.user.id } });
  res.json(entries);
});

// Edit Entry
router.put('/:id', authenticateUser, async (req, res) => {
  const { title, content, category, date } = req.body;
  await Entry.update({ title, content, category, date }, { where: { id: req.params.id, user_id: req.user.id } });
  res.json({ message: 'Entry updated' });
});

// Delete Entry
router.delete('/:id', authenticateUser, async (req, res) => {
  await Entry.destroy({ where: { id: req.params.id, user_id: req.user.id } });
  res.json({ message: 'Entry deleted' });
});

export default router;
