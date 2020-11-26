<template>
  <div class="comments">
    <a-list
      class="comment-list"
      :header="`${data.length} 评论`"
      item-layout="horizontal"
      :data-source="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment :author="item.author" :avatar="item.avatar">
          <template slot="actions">
            <span class="comments__time">{{ item.actions[0] }}</span>
            <span class="comments__reply" @click="handReply(item._index)">回复</span>
          </template>
          <p slot="content" class="comments__content">
            {{ item.content }}
          </p>
          <template v-if="item.children">
            <!-- 二级评论 -->
            <a-comment v-for="(child, index) in item.children" :avatar="child.avatar" :key="index">
              <template #author>
                <span class="comments__from-user">{{ child.author[0] }}</span>
                <i>回复</i>
                <span class="comments__to-user">{{ child.author[1] }}</span>
              </template>
              <template slot="actions">
                <span class="comments__time">{{ child.actions[0] }}</span>
                <span class="comments__reply" @click="handReply(item._index)">回复</span>
              </template>
              <p slot="content" class="comments__content">
                {{ child.content }}
              </p>
            </a-comment>
          </template>
        </a-comment>
        <!-- 二级表单 -->
        <div class="comments__form" v-show="visible && current == item._index">
          <CommentForm :min-row="6" btn-size="small" @on-submit="onSubmit" />
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import CommentForm from '../CommentForm'

export default {
  name: 'Comments',

  components: { CommentForm },

  props: {},

  data() {
    return {
      current: -1,
      visible: false,
      data: [
        {
          _index: 0,
          actions: ['2020-1-01', 'Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: 111,
          children: [
            {
              actions: ['2020-12-1', 'Reply to'],
              author: ['Han Solo', 'adfasdf'],
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
              datetime: 1111
            }
          ]
        },
        {
          _index: 1,
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: 1111
        }
      ]
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    onSubmit(val) {
      this.$emit('on-submit', val)
    },
    handReply(val) {
      if (this.current == val) {
        this.visible = !this.visible
      } else {
        this.visible = true
        this.current = val
      }
    }
  }
}
</script>
<style lang="less">
.comments {
  margin-top: 40px;
  &__form {
    width: 100%;
  }
  .ant-list-item {
    flex-direction: column;
  }
  .ant-comment-content-author-name {
    #colors.text(link-color);
  }
  &__from-user,
  &__to-user {
    #colors.text(link-color);
    + i {
      margin: 0 8px;
      font-weight: 700;
    }
  }
  &__reply {
    font-weight: bolder;
    color: @color-blue !important;
  }
}
</style>
