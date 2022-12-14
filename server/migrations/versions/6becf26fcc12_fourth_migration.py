"""Fourth migration

Revision ID: 6becf26fcc12
Revises: 6739b1111d8c
Create Date: 2022-11-21 10:43:58.458188

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6becf26fcc12'
down_revision = '6739b1111d8c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.VARCHAR(length=32),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.VARCHAR(length=32),
               nullable=True)

    # ### end Alembic commands ###
